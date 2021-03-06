import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/Article.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'

export default [{
        path: '/home',
        component: Home
    },
    {
        path: '/article/:id',
        component: Article
    },
    {
        path: '/follow',
        component: Follow
    },
    {
        path: '/column',
        component: Column
    }, {
        path: '/user-info',
        component: UserInfo
    },
    {
        path: '/user-login',
        component: UserLogin
    },
    {
        path: '/user-reg',
        component: UserReg
    }, {
        path: '/',
        component: Home
    }, {
        path: '*',
        redirect: '/home'
    }
]