import React from 'react'
import styled from 'styled-components'
import {useContext} from 'react'
import stateContext from '../stateContext'
function FormPreview() {
    const state = useContext(stateContext)
  return (
    
    <>
    <div className='form-preview'>

    <Test>
        <span>Form preview</span>
        <span className='preview-font'>{state.email}</span>
        <span className='preview-font'>{state.phone}</span>
        <span className='preview-font'>{state.address1}</span>
        <span className='preview-font'>{state.address2}</span>
        <span className='preview-font'>{state.pin}</span>
        <span className='preview-font'>{state.state}</span>
    </Test>

    </div>
    
    </>
  )
}

const Test = styled.div`
  display: flex; 
  flex-direction : column;
  align-items: end;
  padding:20px;
  background-color:grey;
  gap: 10px;
  
`;
export default FormPreview;
