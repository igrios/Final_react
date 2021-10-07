import React,{useState,UseEffect, useEffect} from "react";
import {useParams,useHistory} from "react-router-dom";
import  firebase from "../Config/firebase";
import {useForm} from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Producto from "../Components/Producto";



function ModificarProducto(props){
    const history = useHistory()
    const [loading,setLoading] = useState(true);
    const {id} = useParams()
    const {register, handleSubmit,watch,setValue,formState:{ errors }} = useForm();

    const onSubmit = async (data) =>{
        console.log("handle", data)        
        try{
            const document = await firebase.firestore().doc("productos/"+id).set(data)
            history.push("/abmproductos")
       }catch(e){
        console.log("Error",e)
             }
    }

      useEffect(
          ()=> {
              async function request(){
              const response = await firebase.firestore().doc("productos/"+id).get()
             
              if(response){
                  setValue("nombre",response.data().nombre);
                  setValue("precio",response.data().precio);
                  setValue("descripcion",response.data().descripcion);
                  setValue("sku",response.data().sku);
                  setValue("direImagen",response.data().direImagen);
                  setLoading(false)
              }
          }
          request()
        },[]
      )

if(loading){

return ( <div> Loading ...</div>)

}else {

    return (
 <div>
        <Form  onSubmit={handleSubmit(onSubmit)}>

<h2>modificacion productos</h2>

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
    
    <Form.Group className="mb-3" controlId="sku">
    <Form.Label>direImagen</Form.Label><Form.Control type="text" placeholder="direImagen" {...register("direImagen",{required:true})}/><Form.Text className="text-muted"> </Form.Text>
      </Form.Group>  


  <Button variant="primary" type="submit">Modificar</Button>
</Form>
</div>
    )
}


      
    }

export default ModificarProducto;