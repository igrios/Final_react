import React from "react"
import {
Link,
} from "react-router-dom"


import {Navbar,Nav,Container} from 'react-bootstrap';

import AuthContext from "../Context/AuthContex";

function Menu(){

    return(
        <AuthContext.Consumer>
            {
                context=>   
                      <div>
                  <Navbar bg="light" expand="lg">
                     <Container>
                         <Navbar.Brand as={Link}to="/">Inicio</Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                               {
                                 !context.userLogin &&
                                   <>
                                  <Nav.Link as={Link} to="/ingresar">Ingresar </Nav.Link>    
                                  <Nav.Link as={Link} to="/registro">Registro </Nav.Link>                              
                                   </>
                               }
  
                               {
                                 context.userLogin &&
                                   <>
                                  <Nav.Link as={Link} to="/abmproductos">Alta </Nav.Link>  
                                  <Nav.Link onClick={()=>context.logout()}>Salir</Nav.Link>  
                                                                           
                                 </>

                                 }
                                
                                 
                                  
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
{
                                   context.userInfo &&
                                  
                                   <div> <h5>Hola..{context.userInfo.nombre}</h5></div>
                                 }
             
                      </div>              
                  
            }
     
        </AuthContext.Consumer>

    )
}
        
    


export default Menu;