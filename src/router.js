import Vue from "vue"
import VueRouter from "vue-router"

import circlewrap from "./components/circle/circlewrap.vue"
import chartwrap from "./components/chart/chartwrap.vue"
import pathwrap from "./components/path/pathwrap.vue"
import routertest from "./components/routertest/routertest.vue"
import tabA from "./components/subrouter/tabA.vue"
import tabB from "./components/subrouter/tabB.vue"
import tabC from "./components/subrouter/tabC.vue"

import render from './components/render/render'
import renderTable from './components/renderTable/renderTable'

Vue.use(VueRouter);



let router = new VueRouter({
	mode:'history',
	base:__dirname, // 本地主目录
	routes:[
		{name:"circle",path:"/circle",component:circlewrap},
		{path:'/chart',component:chartwrap},
		{path:'/path',component:pathwrap,
			beforeEnter:(to, from, next) => {
				console.log(to.path);
				next();
			}
		},
		{name:"render",path:"/render",component:render},
		{name:"renderTable",path:"/renderTable",component:renderTable},
		{path:'/routertest/:userid',component:routertest,
		 children:[  //
			{name:"tab_a",path:"/tab_a/:userid",component:tabA},  // 此路由路径 命名了 name：“tab_a” 同等于 “/tab_a”
			{name:"tab_b",path:"/tab_b/:userid",component:tabB},//path:"/routertest/tab_b/:userid",
		 	{name:"tab_c",path:"/tab_c",component:tabC,meta:{"requiresAuth":true}}
		 ],
		},

	],

})

router.beforeEach((to, from, next) => {
  //console.log(to);
  if(to.matched.some(record=> record.meta.requiresAuth)){ // to.match

  	console.log(to.matched);
  }
  next();
})


export default router