import HomePage from '~/pages/HomePage'
import LoginPage from '~/pages/LoginPage'
import RankPage from '~/pages/RankPage'
import NewMusicPage from '~/pages/NewMusicPage'
import SongPage from '~/pages/SongPage'
import GenrePage from '~/pages/GenrePage'
import SingerPage from '~/pages/SingerPage'
import LoginLayout from '~/components/layouts/LoginPage'
import userPage from '~/pages/userPage'
import AdminPage from '~/admin/AdminPage'
import AdminLayout from '~/admin/AdminLayout'
import User from '~/admin/components/User'
import Song from '~/admin/components/Song'
import AdminGenres from '~/admin/components/AdminGenres'
import UploadSong from '~/admin/components/UploadSong'
import UploadGenre from '~/admin/components/UploadGenre'
import UploadSinger from '~/admin/components/UploadSinger'
import AdminSinger from '~/admin/components/AdminSinger'


export const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/rank', component: RankPage},
    {path: '/login', component: LoginPage, layout: LoginLayout},
    {path: '/newmusic', component: NewMusicPage},
    {path: '/songs/:genreId', component: SongPage},
    {path: '/nation/:id', component: GenrePage},
    {path: '/singer/:slug', component: SingerPage},
    {path: '/profile', component: userPage},
    {path: '/quanly', component: AdminPage, layout: AdminLayout},
    {path: '/quanly/user', component: User, layout: AdminLayout},
    {path: '/quanly/song', component: Song, layout: AdminLayout},
    {path: '/quanly/genres', component: AdminGenres, layout: AdminLayout},
    {path: '/quanly/singer', component: AdminSinger, layout: AdminLayout},
    {path: '/quanly/uploadsong', component: UploadSong, layout: AdminLayout},
    {path: '/quanly/uploadgenre', component: UploadGenre, layout: AdminLayout},
    {path: '/quanly/uploadsinger', component: UploadSinger, layout: AdminLayout}
]

export const privateRoutes = [
   
]