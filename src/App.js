import './App.css';
import MainRoutes from './routes';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

function App() {
  const clientID = "866450661091-l477p6qcpb9c5e13nj3icdaq5hvqdf23.apps.googleusercontent.com";

  const start=()=>{
    gapi.client.init({
      clientID:clientID,
      
    })
  };

  useEffect(()=>{    
    gapi.load('client:auth2',start);
  });
  
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
