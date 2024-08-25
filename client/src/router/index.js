import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/ProductView.vue'
import HelloView from '@/views/HelloView.vue'
import FeaturedCardsView from '@/views/FeaturedCardsView.vue'
import NotFound from '@/views/NotFound.vue'
import NProgress from '@/plugins/nprogress'
import ToDoListView from '@/views/ToDoListView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/product',
      name: 'product',
      meta: {
        title: 'Product',
        description: 'This is the product page'
      },
      component: ProductView
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
      path: '/features',
      name: 'features',
      meta: {
        title: 'Features',
        description: 'This is the Features page'
      },
      component: FeaturedCardsView
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
