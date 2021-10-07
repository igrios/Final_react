import  React,{useState} from "react"
import AuthContext from "./AuthContex"

function AuthProvider(props){
    const [userLogin,setUserLogin] =useState(localStorage.getItem("login"))

    const loginUser= ()=>{
                         setUserLogin(true)
                         localStorage.setItem("login",true)
                           }

    const logout =()=>{
                        setUserLogin(false)
                        localStorage.removeItem("login")
                        }

return (

    <AuthContext.Provider 
    
    value = {{ loginUser,
               logout,
               userLogin

    }} 
    >
       {props.children}
        
    </AuthContext.Provider>
)

}

export default AuthProvider