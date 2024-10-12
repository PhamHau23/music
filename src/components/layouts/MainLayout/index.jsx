import Header from "../Header"
import SideBar from "../Sidebar"

function MainLayout({children}){
    return(
        <>
            <SideBar />
            <Header />
            {children}
        </>
    )
}

export default MainLayout