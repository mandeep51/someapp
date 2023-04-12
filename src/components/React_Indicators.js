import React from 'react'
import {ClipLoader,BounceLoader,BarLoader} from "react-spinners";

function React_Indicators() {
  return (
    <div>
       <ClipLoader
        color='blue'
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <BounceLoader
        color='blue'
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <BarLoader
        color='blue'
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default React_Indicators
