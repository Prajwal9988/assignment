import React from 'react'
import { useContext } from 'react';
import dispatchContext from '../dispatchContext';
import stateContext from '../stateContext';

function Footer() {
  const stateChange = useContext(dispatchContext)
  const state = useContext(stateContext)
  return (
    
    <div>
      { 
         state.progress === 4 
         ? ''
         : <button onClick={()=> stateChange({type: 'INCREASE_PROGRESS'})}>NEXT</button>
      }
      
    </div>
    
  )
}
export default Footer;
