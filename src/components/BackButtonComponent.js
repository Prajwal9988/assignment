import React from 'react'
import dispatchContext from '../dispatchContext'
import { useContext } from 'react'

function BackButtonComponent() {
    const dispatch = useContext(dispatchContext)
  return (
    <button onClick={()=>dispatch({type:'DECREASE PROGRESS'})}> Back </button>
  )
}

export default BackButtonComponent