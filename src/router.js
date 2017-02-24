import Vue from "vue"
import VueRouter from "vue-router"

import circlewrap from "./components/circle/circlewrap.vue"
import chartwrap from "./components/chart/chartwrap.vue"
import pathwrap from "./components/path/pathwrap.vue"
import routertest from "./components/routertest/routertest.vue"
import tabA from "./components/subrouter/tabA.vue"
import tabB from "./components/subrouter/tabB.vue"

Vue.use(VueRouter);



let router = new VueRouter({
	mode:'history',
	base:__dirname, // 本地主目录
	routes:[
		{path:"/circle",component:circlewrap},
		{path:'/chart',component:chartwrap},
		{path:'/path',component:pathwrap},
		{path:'/routertest/:userid',component:routertest,children:[  //
			{path:"/tab_a",component:tabA},
			{path:"/tab_b",component:tabB},
		]
		}
	]
})

export default router