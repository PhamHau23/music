import HomePage from 'src/pages/HomePage'
import LoginPage from 'src/pages/LoginPage'
import RankPage from 'src/pages/RankPage'
import RadioPage from 'src/pages/RadioPage'
import ZingChartPage from 'src/pages/ZingChartPage'
import ThuVienPage from 'src/pages/ThuVienPage'
import LoginLayoutPage from 'src/components/layouts/Login'
import GenresPage from 'src/pages/GenresPage'
import NewMusicPage from 'src/pages/NewMusicPage'
import SongPage from 'src/pages/SongPage'
import GenrePage from 'src/pages/GenrePage'

export const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/rank', component: RankPage},
    {path: '/login', component: LoginPage, layout: LoginLayoutPage},
    {path: '/radio', component: RadioPage},
    {path: '/zingchart', component: ZingChartPage},
    {path: '/genres', component: GenresPage},
    {path: '/newmusic', component: NewMusicPage},
    {path: '/songs/:genreId', component: SongPage},
    {path: '/genres/:genre', component: GenrePage}
]

export const privateRoutes = [
    {path: '/thuvien', component: ThuVienPage}
]