import React from 'react'
import { toast,ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function React_Toastify({closeToast}) {
    const Component=()=>{
        return <div>
            <p>hlo mandeep</p>
            <button>click me</button>
        </div>
    }
let notify=()=>{
    toast.error('basic notification',{position:toast.POSITION.TOP_RIGHT,autoClose:false})
    toast.success('success notification',{position:toast.POSITION.TOP_LEFT,autoClose:6000})
    toast.warn('warn notification',{position:toast.POSITION.TOP_CENTER,autoClose:7000})
    toast.info('info notification',{position:toast.POSITION.BOTTOM_CENTER,autoClose:8000})
    toast.error('error notification',{position:toast.POSITION.BOTTOM_LEFT,autoClose:9000})
    toast.success(<Component></Component>,{position:toast.POSITION.BOTTOM_RIGHT,autoClose:9000})
}
  return (
    <div>
      <button onClick={notify}>notify</button>
      <ToastContainer />
    </div>
  )
}

export default React_Toastify
