import HomePage from '~pages/HomePage'
import LoginPage from '~pages/LoginPage'
import RankPage from '~pages/RankPage'
import RadioPage from '~pages/RadioPage'
import ZingChartPage from '~pages/ZingChartPage'
import ThuVienPage from '~pages/ThuVienPage'
import LoginLayoutPage from '~components/layouts/Login'
import CategoryPage from '~pages/CategoryPage'
import NewMusicPage from '~pages/NewMusicPage'

export const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/rank', component: RankPage},
    {path: '/login', component: LoginPage, layout: LoginLayoutPage},
    {path: '/thuvien', component: ThuVienPage},
    {path: '/radio', component: RadioPage},
    {path: '/zingchart', component: ZingChartPage},
    {path: '/category', component: CategoryPage},
    {path: '/newmusic', component: NewMusicPage}
]

export const privateRoutes = [

]