import React,{useState,useEffect} from "react"
import {
  useParams
} from "react-router-dom";
import Producto from "../Component/Producto";
import firebase from "../Config/firebase"


function DetallePage(props){
  const [producto,setProducto] = useState({})
  const [loading,setLoading] = useState(true);
  const {id} = useParams()
  console.log(id) 
  /*if(props.match.params.id){
    console.log(props.match.params.id)
  }*/
  useEffect(
    ()=>{
      async function request(){
        const response = await firebase.firestore().doc("productos/"+id)
        .get()

        if(response){
          setProducto({...response.data(),id:response.id});
          console.log("producto",response.data(),response.id,producto)
          setLoading(false)
        }
      }
      request()
    }
    
  )
  

  if(loading){
    return (
    
      <div className="App">
        Loading Detalle..
        
       
      </div>
  
    );
  }else{
    return(
     
        <div className="row">
        <div className="col-md-4">
        <Producto datos={producto} verDetalle={false}/>
        </div>
        </div>
        
    )
  }
  
}
export default DetallePage;
