import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {


    const token = localStorage.getItem('auth-token')
    if(!token){
        window.location.href='/create-user'
        return null;
    }
return(
    <>
        {children}
    </>
)


}
export default  ProtectedRoute;