import Vue from "vue"
import VueRouter from "vue-router"

import circlewrap from "./components/circle/circlewrap.vue"
import chartwrap from "./components/chart/chartwrap.vue"

Vue.use(VueRouter);

let router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:"/circle",component:circlewrap},
		{path:'/chart',component:chartwrap}
	]
})

export default router