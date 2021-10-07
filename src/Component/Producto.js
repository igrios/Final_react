import React from "react"
import Card from "react-bootstrap/Card"
import Row from  "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import AuthContext from "../Context/AuthContex"

import {
Link

} from "react-router-dom"



function Productos(props){

    const {datos} = props
    const verDetalle  = (props.verDetalle!== false?true:false)

    return(
      <AuthContext.Consumer>
                       {
                            context=>

                            <div className="container">
                            <div className = "row">
                              <div className = "col-mod-4">
                
                             <div className="card">
                               <div className="card-body"> 
                                   <img src={datos.direImagen}/>
                                   <h4 className="card-title"> {datos.nombre} </h4>
                                  <p className="card-text text-secondary">{datos.descripcion} </p>
                                   {datos.precio}
                               </div>              
                          
                               </div>
                            </div> 
                
                        </div>
                
                          
                
                
                       
                          { verDetalle &&
                            <>
                            <Link to={'/producto/'+datos.id}>DETALLE</Link>
                           
                            </>
                          }
                                      
                        {props.delete && 
                        <Button onClick={()=>props.delete(datos.id)}>ELIMINAR </Button>
                        }
                        
                        { props.update && 
                          <Link to={'/producto/modificar/'+datos.id}>EDITAR</Link>
                          
                        } 
                            
                         {
                           context.userLogin && 
                           <Button onClick={()=>props.delete(datos.id)}>COMPRAR </Button>

                         }   
                         
                       </div>


                       }

        
      
       </AuthContext.Consumer>
    )


}

export default Productos;