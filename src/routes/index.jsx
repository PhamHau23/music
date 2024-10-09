import Home from '../pages/Home'
import Rank from '../pages/Rank'
import Login from '../pages/login'
import LoginLayout from '../components/layouts/Login'

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/rank', component: Rank},
    {path: '/login', component: Login, layout: LoginLayout}
]

export const privateRoutes = [

]