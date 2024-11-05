import HomePage from '~pages/HomePage'
import LoginPage from '~pages/LoginPage'
import RankPage from '~pages/RankPage'
import RadioPage from '~pages/RadioPage'
import ZingChartPage from '~pages/ZingChartPage'
import ThuVienPage from '~pages/ThuVienPage'
import LoginLayoutPage from '~components/layouts/Login'
import GenresPage from 'src/pages/GenresPage'
import NewMusicPage from '~pages/NewMusicPage'
import SongPage from 'src/pages/SongPage'
import GenrePage from 'src/pages/GenrePage'

export const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/rank', component: RankPage},
    {path: '/login', component: LoginPage, layout: LoginLayoutPage},
    {path: '/thuvien', component: ThuVienPage},
    {path: '/radio', component: RadioPage},
    {path: '/zingchart', component: ZingChartPage},
    {path: '/genres', component: GenresPage},
    {path: '/newmusic', component: NewMusicPage},
    {path: '/songs/:genreId', component: SongPage},
    {path: '/genres/:genre', component: GenrePage}
]

export const privateRoutes = [

]