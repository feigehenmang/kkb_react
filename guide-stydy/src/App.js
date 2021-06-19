import React, { useCallback, useEffect, useRef, useState } from 'react';
import Mask from './Mask'
import Modal from './Modal'
import './App.css'
function App() {
  const btnRef = useRef(null);
  // useEffect(() => {
  //   console.log(btnRef)
  // }, [btnRef])
  return (<>
    <Mask selectElement={btnRef}/>
    <Modal selectElement={btnRef}></Modal>
    <button className="btn" ref={btnRef}>Add</button>  
  </>)
}

export default App;
