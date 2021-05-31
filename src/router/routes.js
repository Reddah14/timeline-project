
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Welcome_Page/Welcome.vue') }
    ]
  },
  {
    path: '/timeline',
    component: () => import('src/pages/Timeline_Page/Timeline.vue')
  },  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
