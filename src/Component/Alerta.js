import React from "react";
import {Alert} from 'react-bootstrap';

const styles ={

    alert:{marginTop:"10px"

}

}


    function Alerta(props){
 
        const{variant,text} = props
        return (
          <Alert variant={variant} styles={styles.alert}> {text}
          
          </Alert>

        )


    }


export default Alerta;