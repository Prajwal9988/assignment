import React from 'react'
import BackButtonComponent from './BackButtonComponent';
function Payment() {
  return (
    <div>
      <span>Payments Page</span>
      <br></br>
      <BackButtonComponent />
      <input type={'range'}></input>
    </div>
  )
}

export default Payment;