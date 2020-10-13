import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from "../store/index";

Vue.use(VueRouter);

const meta = {
  title: store.getters.title,
  metaTags: [
    {
      name: 'author',
      content: store.getters.author,
    },
    {
      name: 'description',
      content: store.getters.description,
    },
  ],
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  },
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]'),
  ).map(el => el.parentNode.removeChild(el));
  if (!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta');
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));
  next();
});

export default router;
