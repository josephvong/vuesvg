import Vue from "vue"
import VueRouter from "vue-router"

import circlewrap from "./components/circle/circlewrap.vue"
import chartwrap from "./components/chart/chartwrap.vue"
import pathwrap from "./components/path/pathwrap.vue"

Vue.use(VueRouter);

let router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:"/circle",component:circlewrap},
		{path:'/chart',component:chartwrap},
		{path:'/path',component:pathwrap}
	]
})

export default router