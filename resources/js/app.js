import Vue from 'vue'

window.hljs = require('highlightjs')

new Vue({
  el: '#nav',

  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  },

  data () {
    return {
      isOpen: false
    }
  }
})
