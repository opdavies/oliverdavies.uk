import Vue from 'vue'

window.hljs = require('highlightjs')

new Vue({
  el: '#app',

  data () {
    return {
      isOpen: false
    }
  },

  mounted: function () {
    this.$el.classList.remove('no-js')
    this.$el.classList.add('js')
  },

  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
})
