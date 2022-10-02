import React from 'react'
import dispatchContext from '../dispatchContext'
import { useContext } from 'react'
import {ReactComponent as Left} from './icons/Arrow-left.svg'
import '../backbutton.css'
function BackButtonComponent() {
  const dispatch = useContext(dispatchContext)
  return (
      <button className='back-button' onClick={()=>dispatch({type:'DECREASE PROGRESS'})}><Left/></button>
  )
}
export default BackButtonComponent