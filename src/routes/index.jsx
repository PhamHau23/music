import Home from '~pages/Home'
import Login from '~pages/Login'
import Rank from '~pages/Rank'
import Radio from '~pages/Radio'
import Zingchart from '~pages/Zingchart'
import Thuvien from '~pages/Thuvien'
import LoginLayout from '~components/layouts/Login'
import Category from '~pages/Category'
import NewMusic from '~pages/NewMusic'

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/rank', component: Rank},
    {path: '/login', component: Login, layout: LoginLayout},
    {path: '/thuvien', component: Thuvien},
    {path: '/radio', component: Radio},
    {path: '/zingchart', component: Zingchart},
    {path: '/category', component: Category},
    {path: '/newmusic', component: NewMusic}
]

export const privateRoutes = [

]