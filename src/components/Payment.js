import React from 'react'
import BackButtonComponent from './BackButtonComponent';
function Payment() {
  return (
    <div className="payments-container">
      <span></span>
      <br></br>
      <BackButtonComponent />
      <input type={'range'}></input>
    </div>
  )
}

export default Payment;