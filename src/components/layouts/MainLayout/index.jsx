import Header from "../Header"
import SideBar from "../sidebar"

function MainLayout({children}){
    return(
        <div>
            <Header />
            <SideBar />
            {children}
        </div>
    )
}

export default MainLayout