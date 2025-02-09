import classNames from "classnames/bind"
import styles from "./Admin.module.scss"
import AdminNavbar from "./components/AdminNavbar"
import AdminPage from "./AdminPage"

export const c = classNames.bind(styles)

function AdminLayout({children}){
    return(
        <div className={c('admin-container')}>
            <AdminNavbar className={c}/>
            <AdminPage>
                {children}
            </AdminPage>
        </div>
    )
}

export default AdminLayout