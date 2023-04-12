import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

function React_ColorPicker() {
    const [show,setShow]=useState(false)
    const [color,setColor]=useState('#fff')
  return (
    <div>
        <button onClick={()=>setShow(!show)}>show</button>
        <div style={{width:'100px',height:'100px',backgroundColor:color,marginBottom:"20px"}}>{color}</div>
        { show &&  <ChromePicker color={color} onChange={(updatedColor)=>setColor(updatedColor.hex)} />}
     </div>
  )
}

export default React_ColorPicker
