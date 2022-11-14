// import { ToastContainer } from 'react-toastify';
import React, {useEffect, useState} from 'react'
// import { Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import { connectWallet } from './providers/Providers';
// import {} from './utils/Utils';
// import {} from './networks/Networks';
// import {} from './callbacks/Callbacks';
import { Home, Navigator } from './components/';


function App() {
  const [Loaded, setLoaded] = useState(false);
  return (
    <div className="w-full">
      
      {Loaded == false ? (
        <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="flex justify-center items-center">
  <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full" role="status" style={{verticalAlign: "-0.125em", border: "0.25em solid",borderRightColor: "transparent"}}>
  </div>
</div>
    </div>
    </>
      ) : ""} 
      
    <Routes>
      <Route path="/" element={<Home Loaded={Loaded} setLoaded={setLoaded} />}></Route>
    </Routes>
    </div>
  );
}

export default App;
