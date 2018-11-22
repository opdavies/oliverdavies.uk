window.hljs = require('highlightjs')
window.Vue = require('vue')

import Navbar from './components/Navbar';

const app = new Vue({
  el: '#app',
  components: { Navbar },
})
