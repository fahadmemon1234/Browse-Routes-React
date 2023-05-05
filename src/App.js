import React from "react"; 
import { Route,Routes } from "react-router-dom";

function App(){

  return(
    
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="*" element={<h1>404 PAGE NOT FOUND </h1>}/>
  </Routes>
  )

}

export default App;
