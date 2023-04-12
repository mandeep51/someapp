import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { MdSensors } from "react-icons/md";
import { IconContext } from "react-icons";


function React_Icons() {
  return (
    <IconContext.Provider value={{color:'purple',size:'5em'}}>
         <div>
      <MdAccountCircle /* color='red' size='5em' */></MdAccountCircle>
      <MdSensors /* color='red' size='5em' */></MdSensors>
    </div>
    </IconContext.Provider>
   
  )
}

export default React_Icons
