import React,{Component} from "react"
import{
BrowserRouter as Router,
Switch,
Route,
Redirect

} from "react-router-dom"

import Registro from "../Pages/Registro";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";
import ABMProductos from "../Pages/ABMProductos";
import ModificarProducto from "../Pages/ModificarProducto";
import DetallePage from "../Pages/DetallePage";

function Public(){

    return(
         <Switch>

           <Route path="/registro">
             <Registro/>
           </Route>
           

           <Route path="/ingresar">
             <LoginPage/>
           </Route>

          
           <Route path="/abmproductos">
             <ABMProductos />
           </Route>          
             
           <Route path="/producto/modificar/:id">
             <ModificarProducto/>
           </Route> 

           <Route path="/producto/:id">
             <DetallePage/>
           </Route> 


             <Redirect path="/home" to="/" />
             
             <Route path="/" exact>
               <HomePage/>
               </Route>
                      
             
             <Route path="*">
              <NotFoundPage/>
             </Route>


         </Switch>

    )



    
}

export default Public;