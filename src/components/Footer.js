import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components'
import dispatchContext from '../dispatchContext';
import stateContext from '../stateContext';
import Validation from './Validation';


function nextButtonClick(e, stateChange, state){
  //Validation must be in place before we move to next screen
  Validation(state).then((res)=>{
      if(res === true){
        console.log("Reached")
        stateChange({type: 'INCREASE_PROGRESS'})
        stateChange({type: 'ERRORS', value: {}})
      }
      else{
        stateChange({type: 'ERRORS', value: res})
      }
  });

}

function Footer() {
  const stateChange = useContext(dispatchContext)
  const state = useContext(stateContext);
  return ( 
    <div className='footer'>
      { 
         state.progress === 4 
         ? ''
         : <ButtonTemplate onClick={(e)=>{nextButtonClick(e, stateChange, state)}}>NEXT</ButtonTemplate>
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
