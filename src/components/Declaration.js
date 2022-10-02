import React from 'react'
import BackButtonComponent from './BackButtonComponent'

function Declaration() {
  return (
    <div className='declaration-container'>
  
      <BackButtonComponent />
      <br></br>
      <input type={'checkbox'}></input>
      <label>I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.</label>
      <br></br>
      <input type={'checkbox'}></input>   
      <label>I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.</label> 
      <br></br>
      <input type={'checkbox'}></input>   
      <label>I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)</label> 
      <br></br>
      <input type={'checkbox'}></input>   
      <label>I understand that this policy doesn't cover Pre-existing diseases.</label> 
      <br></br>
     
    </div>
    
  )
}

export default Declaration