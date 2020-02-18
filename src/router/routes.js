import Home from '../pages/Home/Home.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shop from '../pages/Shop/Shop.vue'
import Sort from '../pages/Sort/Sort.vue'
import WorthToBuy from '../pages/WorthToBuy/WorthToBuy.vue'







export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/personal',
        component:Personal
    },
    {
        path:'/shop',
        component:Shop
    },
    {
        path:'/sort',
        component:Sort
    },
    {
        path:'/worthtobuy',
        component:WorthToBuy
    },
    {
        path:'/',
        redirect:'/home'
    },
]