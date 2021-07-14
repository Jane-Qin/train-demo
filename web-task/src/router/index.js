import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Conversion from '@/views/Conversion.vue'
import CodeEditor from '@/views/CodeEditor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Conversion',
      component: Conversion
    },
	{
      path: '/codeEditor',
      name: 'CodeEditor',
      component: CodeEditor
    }
  ]
})
