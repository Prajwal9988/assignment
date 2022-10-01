import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components'
import dispatchContext from '../dispatchContext';
import stateContext from '../stateContext';

function Footer() {
  const stateChange = useContext(dispatchContext)
  const state = useContext(stateContext)
  return ( 
    <div className='footer'>
      { 
         state.progress === 4 
         ? ''
         : <ButtonTemplate onClick={()=> stateChange({type: 'INCREASE_PROGRESS'})}>NEXT</ButtonTemplate>
      }   
    </div>
  )
}
const ButtonTemplate = styled.button`
    padding: 12px 20px; 
    background-color: #E06358;  
    border-radius: 6px;
    width: 320px;
    height: 47px;
    color:#FFFFFF;
    border-width:0px; 
`;
export default Footer;
