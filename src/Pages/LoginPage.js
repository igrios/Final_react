import React,{useState,useContext} from "react";
import { useForm } from "react-hook-form"; // 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../Config/firebase';
import AuthContext from "../Context/AuthContex";


function LoginPage(){
   
    const [form,setForm] = useState({nombre:"",apellido:"",email:"",password:""});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const context = useContext(AuthContext);
   
    const onSubmit = async (data)=>{
       // console.log("handleSubmit",data)  
        console.log("handle RHF",data)
        try{
             
        
        const responseUser = await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
         console.log("usuario",responseUser.user.uid)
         if(responseUser.user.uid){
           context.loginUser();
                   }
       

        }catch(e){
          console.log("Errorazoonon",e)
          

        }
      }

return(    

<div>
  <Form  onSubmit={handleSubmit(onSubmit)}>   
  
  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email" {...register("email",{required:true})} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="password" {...register("password",{required:true})} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>        
</div>
)

}

export default LoginPage;