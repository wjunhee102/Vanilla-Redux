import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';


function useMouse() {
  const [ state, setState ] = useState({mouseX : 0, mouseY : 0});

  function mouseEvent(event) {
    setState({mouseX : event.clientX , mouseY : event.clientY});
  }
  useEffect(()=>{
    window.addEventListener("mousemove", mouseEvent);
    return()=> window.removeEventListener("mousemove", mouseEvent);
  },[])
  return state
}

function useScroll() {
  const [ state, setState ] = useState({scrollX : 0, scrollY : 0});
  
  function scrollEvent() {
    setState({scrollY : window.scrollY, scrollX : window.scrollX})
  }

  useEffect(()=>{
    window.addEventListener("scroll", scrollEvent);
    return ()=> window.removeEventListener("scroll", scrollEvent);
  },[])
  return state
}



const useFade = (duration = 1, delay = 0) => {
  
  // if(typeof duration !== "number" || typeof delay !== "number") {
  //   return ; 
  // }

  const element = useRef();

  useEffect(()=> {
    if(element.current) {
      const  { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  },[duration])

  return { ref : element , style : { opacity : 0 }};
}

function App() {
  const {mouseX, mouseY} = useMouse();
  const {scrollX, scrollY} = useScroll();
  const h3Stlye = {
    position : "fixed",
    left: '100%',
    transform : `translate(-${scrollY}px, 0px)`
  }
  
  const fadeImg = useFade(3, 5);
  const fadeP = useFade(7,6);

  return (
    <div className="App" style={{height: `1000vh` , position : 'relative'}}>
      <header className="App-header" style={h3Stlye}>
        <img {...fadeImg} src={logo} className="App-logo" alt="logo" />
        <p {...fadeP}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>x : {mouseX} , y : {mouseY}</h3>
        <h3>x : {scrollX}, y : {scrollY}</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
