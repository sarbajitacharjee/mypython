/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useContext } from 'react'
import { AppContext } from "./CreateContext";



const VideoList = () => {
  const [count, setcount] = useState(0);
  const [windowsize, setwindowsize] = useState(window.screen.width);

  const user = useContext(AppContext)


  const windowresizer = () => {
    setwindowsize(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", windowresizer);
    document.title = `Count ${count}`;
    
    return () => {
      window.removeEventListener("resize", windowresizer);
    };

  }, [count]);

  function update() {
    console.log("clicked");
    setcount(count + 1);
  }

  return (
    <>
      <div className=" w-full h-screen flex flex-col gap-10 justify-center items-center  bg-green-600">
        <h1 className="text-4xl text-Black">Clicked : {count}</h1>

        <button
          className="w-32 h-16 bg-black text-white rounded-lg text-bold"
          onClick={update}
        >
          Click
        </button>
        <h1 className="text-4xl text-Black">Window Size : {windowsize}</h1>
      </div>
{/* --------------------- Code for Context =========================== */}
      <div className="w-full  text-black text-3xl h-screen flex flex-col gap-10 justify-center items-center  bg-blue-600">
      <h1>
        My Username : {user.name} , 
      </h1>
        My Age is {user.age} 😉
    </div>  
    </>
  );
};

export default VideoList;