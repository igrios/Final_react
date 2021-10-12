import React,{useEffect, useState} from "react";
import { useForm } from "react-hook-form"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../Config/firebase';
import Producto from '../Component/Producto';



function ABMProductos(){
   
    const [recargar,setRecargar] = useState(false)
    const [productos,setProdutos]= useState([])
   //4 const [form,setForm] = useState({nombre:"",apellido:"",email:"",password:""});
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
   
    const onSubmit = async (data)=>{
       // console.log("handleSubmit",data)  
        console.log("handle RHF",data)
        try{     
                const document = await firebase.firestore().collection("productos")
                .add(data)
                  console.log("documento",document)       
                  setRecargar(true)                

        }catch(e){
          console.log("Error",e)
          
        }
          
      } 
    const getProductos = async()=> {
      try{
      const querysnapshot = await firebase.firestore().collection("productos")
      .get()
      setProdutos(querysnapshot.docs) //docs es un array con toda la coleccion productos 
      setRecargar(false)          
    }catch(e){
         console.log(e);

    }
      }
useEffect(
          ()=>{
                getProductos();
         },[]
        )

useEffect(
          ()=>{
               if(recargar)
                getProductos();
         },[recargar]
        )
 const handleDelete = async(id)=>{
     try{
         // const document = await firebase.firestore().doc("productos/"+id).delete();
       setRecargar(true)
     }catch(e){
         console.log(errors)
     }
 }       

return(    

<div>
  <h2>Productos </h2>  
 
 <div className="container d-flex justify-content-center h-100 align-items-center bg-info">
  <div className="row">
        <div className="col-md-4">
  {productos.map((producto)=><Producto key={producto.id} datos={{...producto.data(),id:producto.id}} delete={handleDelete} update={true}/>)}
  </div>
  </div>
  </div>
<Form  onSubmit={handleSubmit(onSubmit)}>

<h2>Alta Productos </h2>

  <Form.Group className="mb-3" controlId="nombre">
    <Form.Label>Nombre</Form.Label><Form.Control type="text" placeholder="ingrese Nombre" {...register("nombre",{required:true})}/><Form.Text className="text-muted"> </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="precio">
    <Form.Label>Precio</Form.Label><Form.Control type="text" placeholder="ingrese Precio" {...register("precio",{required:true})}/><Form.Text className="text-muted"> </Form.Text>
   
    </Form.Group>
    <Form.Group className="mb-3" controlId="descripcion">
    <Form.Label>Descripcion</Form.Label><Form.Control type="text" placeholder="ingrese Descripcion" {...register("descripcion",{required:true})}/><Form.Text className="text-muted"> </Form.Text>
      </Form.Group> 
  
    <Form.Group className="mb-3" controlId="sku">
    <Form.Label>sku</Form.Label><Form.Control type="text" placeholder="sku" {...register("sku",{required:true})}/><Form.Text className="text-muted"> </Form.Text>
    
  </Form.Group>  


  <Button variant="primary" type="submit">Crear Producto</Button>




</Form>


        
</div>




)

}

export default ABMProductos;