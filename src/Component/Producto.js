import React from "react"
//import Card from "react-bootstrap/Card"



import Card from "../Component/Card"
import Button from "react-bootstrap/Button"
import AuthContext from "../Context/AuthContex"

import {
Link

} from "react-router-dom";




function Productos(props){

    const {datos} = props
  

    return(
      <AuthContext.Consumer>
                       {
                            context=>  
                            
                           <div>                 
                                            
                <Card imageSource={datos.direImagen} title={datos.nombre} text={datos.descripcion} url={'/producto/'+datos.id} price={datos.precio} sku={datos.sku}/>
                         
                                 
                         
                         
                        
                            
                         
                                      
                        {props.delete && 
                        <Button variant="outline-secondary" onClick={()=>props.delete(datos.id)}>ELIMINAR </Button>
                        }
                        
                        { props.update && 
                        <Button variant="outline-secondary"><Link to={'/producto/modificar/'+datos.id}>EDITAR</Link> </Button>
                         
                          
                        } 
                            
                         {
                           context.userLogin && 
                           <Button variant="outline-secondary">COMPRAR </Button>

                         }   
                         
                       </div>


                       }

        
      
       </AuthContext.Consumer>
    )


}

export default Productos;