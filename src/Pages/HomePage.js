import { useState,useEffect } from "react"
import firebase from "../Config/firebase"
import Producto from "../Component/Producto";

function HomePage(){


const [loading,setLoading] = useState(true)
const[productos,setProductos] = useState([])

useEffect(
    ()=>{
     
      async function request(){
        const querySnapshot = await firebase.firestore().collection("productos")
        .get()
        if(querySnapshot.docs){
          setProductos(querySnapshot.docs)
          setLoading(false)
        }
      }
      request()
    },
    []
  )


  if(loading){
    return(
      <div>Loading...</div>
   
    )
  }else{
    return (
      <div>
  <div className="container d-flex justify-content-center h-100 align-items-center bg-info"></div>
       <div className="row">
           <div className="col-md-4">  
   {productos.map(producto=><Producto key={producto.id} datos={{...producto.data(),id:producto.id}}/>)}
       </div>
   
   </div>
          
  
   </div>
    )


  }
}

export default HomePage;