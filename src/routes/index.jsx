import Home from '~pages/Home'
import Login from '~pages/login'
import Rank from '~pages/Rank'
import Radio from '~pages/Radio'
import Zingchart from '~pages/Zingchart'
import Thuvien from '~pages/Thuvien'
import LoginLayout from '~components/layouts/Login'

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/rank', component: Rank},
    {path: '/login', component: Login, layout: LoginLayout},
    {path: '/thuvien', component: Thuvien},
    {path: '/radio', component: Radio},
    {path: '/Zingchart', component: Zingchart}
]

export const privateRoutes = [

]