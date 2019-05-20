# Talks Bundle

## Twig Extensions

### Functions
* `getTalks()` - get all talks

    ```twig
    {% set talks = getTalks(data.talks) %}
    ```

### Filters

* `events` - get events from talks

    ```twig
    {% set talks = getTalks(data.talks)|events
    ```

* `past` - filter by past events

    ```twig
    {% set talks = getTalks(data.talks)|past
    ```

* `upcoming` - filter by current and upcoming events

    ```twig
    {% set talks = getTalks(data.talks)|upcoming
    ```
