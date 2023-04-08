import { createApp } from 'vue'
import { createPinia } from 'pinia'
import stores from './stores/index.js';
import App from './App.vue'
import router from './router'
import FullPageLayout from './components/FullPageLayout.vue'
import DropDown from './components/DropDown.vue'
import HeaderNavbar from './components/HeaderNavbar.vue'
import FoodItem from './components/FoodItem.vue'
import FavoriteRecipe from './components/FavoriteRecipe.vue'
import PrimeVue from 'primevue/config';
import VueLazyload from 'vue-lazyload'
import './assets/main.css'
import '@flaticon/flaticon-uicons/css/all/all.css';
import 'primeicons/primeicons.css';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(stores)
app.use(PrimeVue)
app.use(VueLazyload)
app.component('FullPageLayout', FullPageLayout)
app.component('DropDown', DropDown)
app.component('HeaderNavbar', HeaderNavbar)
app.component('FoodItem', FoodItem)
app.component('FavoriteRecipe', FavoriteRecipe)
app.mount('#app')
