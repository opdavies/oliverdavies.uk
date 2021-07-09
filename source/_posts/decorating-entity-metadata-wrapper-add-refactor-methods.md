---
title: Decorating an Entity Metadata Wrapper to add and refactor methods
excerpt: How to use the Decorator design pattern with Drupal 7's EntityMetadataWrapper to extend it, and add and refactor custom methods.
tags:
    - drupal
    - drupal-7
    - drupal-planet
    - php
date: 2021-02-24
---

Following [yesterday's Entity Metadata Wrapper blog post](/blog/cleanly-retrieving-user-profile-data-using-entity-metadata-wrapper) and as I continued to work on this task, I noticed some duplication and found that I was repeating several of the same chaining steps in different methods in the same file. For example:

```php
public function getFirstName(): string {
  return $this
    ->get('profile_user_basic') // Get the pupil's profile.
    ->get('field_first_name')
    ->value();
}

private function getTeacherFirstName(): string {
  $this
    ->get('profile_student') // Get the pupil's profile.
    ->get('field_class') // Get the pupil's class.
    ->get('field_teacher') // Get the class' teacher.
    ->get('profile_user_basic') // Get the teacher's profile.
    ->get('field_first_name')
    ->value();
}
```

In both cases, the last three lines are the same, where the same profile type is loaded, and the value is loaded from a field.

I wanted to find a way to remove this duplication whilst also making the code more readable. Ideally, this would mean adding a method like `getFirstNameFromBasicProfile()` that would group the last three steps.

## Extending the EntityDrupalWrapper

I've done this before, where I've created a custom wrapper class with its own methods and extends `EntityDrupalWrapper`. This is how that might look:

```php
final class PupilWrapper extends \EntityDrupalWrapper {

  public function __construct(\stdClass $data, $info = []) {
    parent::__construct('user', $data, $info);
  }

  public function getFirstName(): string {
    return $this->getFirstNameFromBasicProfile();
  }

  public function getTeacherFirstName(): string {
    return $this
      ->get('profile_student')
      ->get('field_class')
      ->get('field_teacher')
      ->getFirstNameFromBasicProfile();
  }

  private function getFirstNameFromBasicProfile(): string {
    return $this
      ->get('profile_user_basic')
      ->get('field_first_name')
      ->value();
  }

}
```

Whilst this has worked in previous situations, this time I had this error:

> Error: Call to undefined method EntityDrupalWrapper::getFirstNameFromBasicProfile() in Drupal\my_module\EntityWrapper\PupilWrapper->getTeacherFirstName

This is because the `get()` method is returning an instance of `EntityStructureWrapper` (another class that extends `EntityDrupalWrapper`) which means that `getFirstNameFromBasicProfile()` is not accessible though it's in the same file.

I tried overridding the `get()` method but wasn't able to get this to work.

## Decorating the EntityDrupalWrapper

Another option that I tried was to follow the Decorator design pattern, and add a new class that takes an `EntityDrupalWrapper` as an argument as uses it internally but doesn't extend it. Here's an example:

```php
final class PupilWrapper {

  private $accountWrapper;

  public function __construct(\EntityMetadataWrapper $accountWrapper) {
    $this->accountWrapper = $accountWrapper;
  }

  public function getFirstName(): string {
    return $this->getFirstNameFromBasicProfile();
  }

  public function getTeacherFirstName(): string {
    return $this
      ->get('profile_student')
      ->get('field_class')
      ->get('field_teacher')
      ->getFirstNameFromBasicProfile();
  }

  private function getFirstNameFromBasicProfile(): string {
    return $this
      ->get('profile_user_basic')
      ->get('field_first_name')
      ->value();
  }

}
```

In this case, the constructor argument is an instance of `EntityMetadataWrapper` so that it could be either an `EntityDrupalWrapper` or `EntityStructureWrapper`.

### Re-adding required wrapper methods

As the `get()` method is missing, this would cause an error:

> Error: Call to undefined method Drupal\my_module\EntityWrapper\PupilWrapper::get() in Drupal\my_module\EntityWrapper\PupilWrapper->getFirstName()

However, we can re-add it, have it get the value from `accountWrapper` and return another instance of `PupilWrapper` so that `getFirstNameFromBasicProfile()` will be available.

```php
public function get(string $property): self {
  return new self($this->accountWrapper->get($property));
}
```

The `value()` method is also required, but this can delegate to the decorated wrapper:

> Error: Call to undefined method Drupal\my_module\EntityWrapper\PupilWrapper::value() in Drupal\my_module\EntityWrapper\PupilWrapper->getFirstName()

```php
public function value(): string {
  return $this->accountWrapper->value();
}
```

## Conclusion

This was the first time that I tried extending Drupal 7's entity metadata wrappers in this way, but it worked well, removes the duplication and cleans up the code further.
