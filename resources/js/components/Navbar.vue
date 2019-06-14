<template>
  <div>
    <div class="md:flex">
      <div class="w-full flex items-center md:w-1/3 lg:w-1/4">
        <div class="w-3/4 py-6">
          <div class="text-sm">
            <a
              href="/"
              class="font-semibold text-white"
              tabindex="-1"
            >
              {{ siteTitle }}
            </a>
          </div>
        </div>

        <div class="w-1/4 text-right md:hidden">
          <button
            type="button"
            class="nav-toggle appearance-none"
            aria-label="Toggle main menu"
            @click="hidden = !hidden"
          >
            <svg class="fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z"/></svg>
          </button>
        </div>
      </div>

      <nav
        class="block w-full absolute py-4 -mx-4 mt-2px bg-blue-700 border-b md:mt-0 md:mx-0 md:relative md:flex md:flex-wrap md:flex-1 md:justify-end md:bg-blue-500 md:border-b-0"
        style="margin-top: 3px"
        :class="{ hidden: hidden }"
        role="navigation"
      >
        <a
          v-for="(item, index) in items"
          :key="index"
          class="block py-3 px-4 mx-4 mt-1 -mb-px rounded text-sm text-white no-underline hover:underline focus:outline-none md:py-1 md:px-2 md:mx-2 md:mt-0 md:mr-0"
          :class="{ 'cursor-default bg-blue-500 hover:border-blue-600 hover:no-underline md:bg-blue-700': isActive(item) }"
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
    siteTitle: {
      type: String,
      required: true
    },
    pageUrl: {
      type: String,
      required: true
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
          title: 'Projects',
          href: '/projects',
          pattern: '^/projects/?$',
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

  methods: {
    isActive (item) {
      return this.pageUrl.match(new RegExp(item.pattern))
    }
  }
}
</script>
