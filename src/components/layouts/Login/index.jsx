import Header from "../Header";

function LoginLayout( {children} ){
    return(
        <div>
            <Header />
            {children}
        </div>
    )
}

export default LoginLayout