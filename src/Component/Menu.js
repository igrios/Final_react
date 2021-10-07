import React,{Component} from "react"
import {
Link,
NavLink

} from "react-router-dom"

import Navbar from 'react-bootstrap/Navbar';

import AuthContext from "../Context/AuthContex";
import Button from "@restart/ui/esm/Button";





function Menu(){

    return(
        <AuthContext.Consumer>
            {
                context=>   
                      <div>
                <NavLink   to="/"> Inicio </NavLink>
                {
                context.userLogin &&
                <>
                <NavLink to="/abmproductos"> Alta Productos </NavLink> 
                <Button onClick={context.logout()}> Salir </Button>
                </>

                }
                 {
                !context.userLogin &&
                 <>
                 <NavLink to="/ingresar"> Ingresar </NavLink>                          
                 <NavLink to="/registro"> Registro </NavLink>
               
                </>
                }
                </div>              
                  
            }
     
        </AuthContext.Consumer>

    )
}
        
    


export default Menu;