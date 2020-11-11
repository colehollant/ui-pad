<script>
import Vue from 'vue'
export default {
  name: 'I-Frame', 
  render(h) {
    return  h('iframe', {
      on: { 
        load: this.renderChildren,
      }
    })
  },
  beforeUpdate() {
    this.iApp.children = Object.freeze(this.$slots.default)
  },  
  methods: {
    renderChildren() {
      const children = this.$slots.default
      this.$el.contentDocument.head.innerHTML = document.head.innerHTML
      const body = this.$el.contentDocument.body      
      const el = document.createElement('DIV')
      body.appendChild(el)
      const iApp = new Vue({
        name: 'iApp',
        data: { children: Object.freeze(children) }, 
        render(h) {
          return h('div', this.children)
        },
      })
      iApp.$mount(el)
      this.iApp = iApp
    }
  }
}
</script>