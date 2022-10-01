import React from 'react'
import dispatchContext from '../dispatchContext'
import { useContext } from 'react'
import '../backbutton.css'
function BackButtonComponent() {
  const dispatch = useContext(dispatchContext)
  return (
  
      <button className='back-button' onClick={()=>dispatch({type:'DECREASE PROGRESS'})}>q</button>

  )
}
export default BackButtonComponent