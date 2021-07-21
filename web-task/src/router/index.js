import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Conversion from '@/views/Conversion.vue'
import CodeEditor from '@/views/CodeEditor.vue'
import FishTemplate from '@/views/FishTemplate.vue'
import ListNode from '@/views/algorithm/ListNode.vue'

Vue.use(Router);

export default new Router({
  routes: [
	{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/conversion',
      name: 'Conversion',
      component: Conversion
    },
	{
      path: '/codeEditor',
      name: 'CodeEditor',
      component: CodeEditor
    },
    {
      path:'/fishTemplate',
      name:'FishTemplate',
      component:FishTemplate
    },
    {
      path:'/listNode',
      name:'ListNode',
      component:ListNode
    }
  ]
})
