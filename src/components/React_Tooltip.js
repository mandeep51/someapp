import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Component=()=>{
    return <>
    <p>hlo mandeep</p>
    <h6>hii</h6>
    </>
}

function React_Tooltip() {
  return (
    <div>
        <div style={{marginBottom:'30px'}}>
        <Tippy content="Hello">
    <button>My button</button>
  </Tippy>
        </div>

        <div style={{marginBottom:'30px'}}>
        <Tippy content={<h1>hlo Mandeep</h1>}>
    <button>My button</button>
  </Tippy>
        </div>

        <div style={{marginBottom:'30px'}}>
        <Tippy content={<Component></Component>}>
    <button>My button</button>
  </Tippy>
        </div>
      
    </div>
  )
}

export default React_Tooltip
