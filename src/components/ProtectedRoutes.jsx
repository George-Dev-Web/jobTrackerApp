import { Navigate, Outlet} from "react-router-dom";


function ProtectedRoutes(){
    const isAuth = sessionStorage.getItem("userId");
    console.log(isAuth)
    return (isAuth ? <Outlet/> : <Navigate to="/login"/>)
}

export default ProtectedRoutes