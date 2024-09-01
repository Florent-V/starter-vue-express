import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DemoProductView from '@/views/Demo/DemoProductView.vue'
import HelloView from '@/views/HelloView.vue'
import FeaturedCardsView from '@/views/Demo/DemoFeaturedCardsView.vue'
import NotFound from '@/views/NotFound.vue'
import NProgress from '@/plugins/nprogress'
import ToDoListView from '@/views/ToDoList/ToDoListView.vue'
import SignInView from '@/views/Auth/SignInView.vue'
import SignUpView from '@/views/Auth/SignUpView.vue'
import ProductView from '@/views/Product/ProductView.vue'
import ProductDetailView from '@/views/Product/ProductDetailView.vue'
import ProductFormView from '@/views/Product/ProductFormView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home',
        description: 'This is the home page'
      },
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      meta: {
        title: 'Sign In',
        description: 'Page to sign in'
      },
      component: SignInView
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {
        title: 'Sign Up',
        description: 'Page to sign up'
      },
      component: SignUpView
    },
    {
      path: '/demo-product',
      name: 'demo-product',
      meta: {
        title: 'Demo Product',
        description: 'This is the demo product page'
      },
      component: DemoProductView
    },
    {
      path: '/demo-features',
      name: 'demo-features',
      meta: {
        title: 'Demo Features',
        description: 'This is the Demo Features page'
      },
      component: FeaturedCardsView
    },
    {
      path: '/product/new',
      name: 'productNew',
      meta: {
        title: 'Product',
        description: 'This is the product page'
      },
      component: ProductFormView
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        title: 'ProductListView',
        description: 'This is the product page'
      },
      component: ProductView
    },
    {
      path: '/product/:id',
      name: 'productdetail',
      meta: {
        title: 'ProductDetailView',
        description: 'This is the product page'
      },
      component: ProductDetailView
    },
    {
      path: '/product/:id/edit',
      name: 'productedit',
      meta: {
        title: 'ProductDetailView',
        description: 'This is the product page'
      },
      component: ProductFormView
    },
    {
      path: '/todolist',
      name: 'todolist',
      meta: {
        title: 'ToDoList',
        description: 'This is the ToDoList page'
      },
      component: ToDoListView
    },
    {
      path: '/hello/:name',
      name: 'hello',
      meta: {
        title: 'Hello',
        description: 'This is the hello page'
      },
      component: HelloView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About',
        description: 'This is the about page'
      },
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*', // Correspond à toutes les routes non définies
      name: 'NotFound',
      component: NotFound,
    },
  ]
})

router.beforeEach((to) => {
  const { title, description } = to.meta;
  const defaultTitle = 'Default Title';
  const defaultDescription = 'Default Description';

  document.title = title || defaultTitle

  const descriptionElement = document.querySelector('meta[name="description"]')

  descriptionElement.setAttribute('content', description || defaultDescription)
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
