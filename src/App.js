
import './App.css';

import Menu from './Component/Menu';
import Public from './Routes/Public';

import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
    <AuthProvider>
    <Router>
      <Menu/>
      <Public/>      
    </Router>
    </AuthProvider>
    
  );
  
       
  
}

export default App;
