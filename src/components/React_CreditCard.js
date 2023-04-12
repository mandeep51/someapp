import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function React_CreditCard() {
 const [number,setNumber]=useState('')
 const [name,setName]=useState('')
 const [expiry,setExpiry]=useState('')
 const [cvc,setCvc]=useState('')
 const [focus,setFocus]=useState('')
  return (
    <div>
     <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
         <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={e=>setNumber(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
          />

<input
            type="text"
            name="name"
            placeholder="Name"
            onChange={e=>setName(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
          />

<input
            type="text"
            name="expiry"
            placeholder="expiry date"
            onChange={e=>setExpiry(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
          />

<input
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={e=>setCvc(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
          />
         
        </form>
    </div>
  )
}

export default React_CreditCard
