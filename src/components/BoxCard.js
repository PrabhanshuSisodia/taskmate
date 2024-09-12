import React, { useState } from 'react'
import './Box.css'

const BoxCard = ({result, children}) => {
    const [show, setShow] = useState(true);


  return (
    <div className={show ? "": "hidden"}>
        <div className={`box ${result}`}>
            {children}
            <button style={{color: "yellow", backgroundColor: "darkgreen"}} onClick={()=>setShow(!show)} className='trigger'>Hide</button>
        </div>
    </div>
  )
}

export default BoxCard
