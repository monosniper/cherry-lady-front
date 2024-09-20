import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue')
		},
		{
			path: '/catalogue',
			name: 'catalogue',
			component: () => import('../views/CatalogueView.vue')
		},
		{
			path: '/policy',
			name: 'policy',
			component: () => import('../views/PolicyView.vue')
		},
		{
			path: '/terms',
			name: 'terms',
			component: () => import('../views/TermsView.vue')
		},
		{
			path: '/:model',
			name: 'model',
			component: () => import('../views/ModelView.vue')
		},
	]
})

export default router
