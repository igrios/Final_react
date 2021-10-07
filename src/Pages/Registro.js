import React,{useState} from "react";
import { useForm } from "react-hook-form"; // 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  firebase from '../Config/firebase';
import Alerta from "../Component/Alerta";


function Registro(){
   
    const [form,setForm] = useState({nombre:"",apellido:"",email:"",password:""});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [alerta,setAlerta] =  useState({variant:"",text:""});
   
    const onSubmit = async (data)=>{
       // console.log("handleSubmit",data)  
        console.log("handle RHF",data)
        try{
             
        
        const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
         console.log("usuario",responseUser.user.uid)
            if(responseUser.user.uid){
                const document = await firebase.firestore().collection("usuarios")
                .add({
                  nombre:data.nombre,
                  apellido:data.apellido,
                  userId:responseUser.user.uid
                })
                setAlerta({variant:"success",text:"Registro Exitoso"})
            }

        }catch(e){
          console.log("Error",e)
          switch(e.code){
              case "auth/email-already-in-use":
                  setAlerta({variant:"danger",text:"El usuario ya existe"});
                  break;
                 
              case "auth/weak-password":
                setAlerta({variant:"danger",text:"Lacontraseña debe tener mas de 6 caracteres"});
                 break;
              default:
                    setAlerta({variant:"danger",text:e.message});



          }
          
          
          

        }
      }

return(    

<div>
      

<Form  onSubmit={handleSubmit(onSubmit)}>
  <Form.Group className="mb-3" controlId="nombre">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" placeholder="ingrese Nombre" {...register("nombre",{required:true})}/>
    <Form.Text className="text-muted">
    "Debe Ingresar"
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="apellido">
    <Form.Label>Apellido</Form.Label>
    <Form.Control type="text" placeholder="ingrese Apellido" {...register("apellido",{required:true})}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email" {...register("email",{required:true})} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="password" {...register("password",{required:true})} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Registro
  </Button>

<Alerta variant={alerta.variant} text={alerta.text}></Alerta>

</Form>




        
</div>



)

}

export default Registro;