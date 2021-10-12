import  React,{useState} from "react"
import AuthContext from "./AuthContex"

function AuthProvider(props){
    const [userLogin,setUserLogin] = useState(localStorage.getItem("login"))
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))

    const loginUser= (userInfo)=>{
                         setUserLogin(true)
                         setUserInfo(userInfo)
                         localStorage.setItem("login",true)
                         localStorage.setItem("userInfo")
                           }

    const logout =()=>{
                        setUserLogin(false)
                        localStorage.removeItem("login")
                        localStorage.removeItem("userInfo")
                        }

return (

    <AuthContext.Provider 
    
    value = {{ loginUser,
               logout,
               userLogin,
               userInfo

    }} 
    >
       {props.children}
        
    </AuthContext.Provider>
)

}

export default AuthProvider