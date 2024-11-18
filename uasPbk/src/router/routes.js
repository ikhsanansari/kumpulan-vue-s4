import MainLayout from 'layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'weather', component: () => import('pages/Weather.vue') },
      { path: 'external', component: () => import('pages/ExternalLinks.vue') },
      // Tambahkan rute untuk halaman-halaman lain di sini
    ]
  },
  // Rute untuk halaman 404 atau halaman tidak ditemukan
  { path: '*', component: () => import('pages/Error404.vue') }
]

export default routes
