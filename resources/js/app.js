import Vue from 'vue'

window.hljs = require('highlightjs')

new Vue({
  el: '#app',

  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  },

  mounted: function () {
    this.$el.classList.remove('no-js')
    this.$el.classList.add('js')
  },

  data () {
    return {
      isOpen: false
    }
  }
})
