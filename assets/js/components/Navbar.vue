<template>
  <div>
    <div class="sm:flex">
      <div class="w-full sm:w-1/3 lg:w-1/4 flex items-center">
        <div class="w-3/4 py-5">
          <div class="font-semibold text-sm">{{ siteTitle }}</div>
        </div>

        <div class="w-1/4 text-right sm:hidden">
          <button type="button" class="nav-toggle appearance-none" @click="hidden = !hidden" aria-label="Toggle main menu">
            <svg class="fill-current text-grey-dark w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z"/></svg>
          </button>
        </div>
      </div>

      <nav
        class="w-full -mx-4 mt-px sm:mt-0 sm:mx-0 block sm:flex sm:flex-wrap sm:flex-1 sm:justify-end bg-white absolute sm:relative border-b sm:border-b-0"
        :class="{hidden: hidden}"
        role="navigation"
      >
        <a
          v-for="item in items"
          class="block text-black no-underline focus:outline-none p-4 border-l-3 sm:border-l-0 sm:border-b-3 border-transparent hover:border-grey-light focus:border-grey-light focus:bg-white sm:ml-4 sm:mr-0 sm:p-0 hover:no-underline text-sm -mb-px"
          :class="{'border-blue-600 hover:border-blue-600': isActive(item)}"
          :href="item.href"
        >
          <span class="flex items-center h-full">{{ item.title }}</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    siteTitle: String,
    pageUrl: String,
  },

  methods: {
    isActive(item) {
      return this.pageUrl.match(new RegExp(item.pattern))
    }
  },

  data() {
    return {
      hidden: true,

      items: [
        {
          title: 'About',
          href: '/',
          pattern: '^/.$',
        },
        {
          title: 'Experience',
          href: '/experience',
          pattern: '^/experience/?$',
        },
        {
          title: 'Articles',
          href: '/articles',
          pattern: '^/articles/?',
        },
        {
          title: 'Talks',
          href: '/talks',
          pattern: '^/talks/?',
        },
        // {
        //   title: 'Testimonials',
        //   href: '/testimonials',
        //   pattern: '^/testimonials/?$',
        // },
        {
          title: 'Podcasts',
          href: '/podcasts',
          pattern: '^/podcasts/?',
        },
        {
          title: 'Book',
          href: '/test-driven-drupal',
          pattern: '^/test-driven-drupal/?$',
        },
        {
          title: 'Contact',
          href: '/contact',
          pattern: '^/contact/?',
        },
      ],
    }
  },
}
</script>
