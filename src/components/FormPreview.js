import React from 'react'
import styled from 'styled-components'
import {useContext} from 'react'
import stateContext from '../stateContext'
import { data, headings } from '../constants'


function FormPreview() {
  const state = useContext(stateContext)  
  return (
    <div className='form-preview'>
    <PreviewItem>
        <HeaderText> Form preview </HeaderText>
        <hr  style={{
            color: '#E1E5EB',
            "width": "352px"
        }}/>

        {
          data.map((data,i)=>{
            return(
              <FormatText key={i} fieldName ={headings[i]} stateVariables={state[data]}></FormatText>
            )
          })
        }
    </PreviewItem>
    </div>
  )
}


function FormatText({stateVariables, fieldName}){
  return(
    <Text>
      <span>{fieldName}</span>
      <Text2 className='preview-font'>{stateVariables ? stateVariables : '-'}</Text2>
    </Text>
  ) 
}


//Styled components CSS
const HeaderText = styled.span`
  align-self: center;
  color: #55657D;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  widht:100%;
  margin-bottom:5px;
`
const PreviewItem = styled.div`
  display: flex; 
  flex-direction : column;
  align-items: flex-start;
  padding:20px;
  background-color:#FFFFFF;
  gap: 10px;
  width: 352px;
  min-height: 220px; 
  border-radius:10px;

  
`;

const Text = styled.div`
  display:flex;
  width:100%;
  flex-wrap: wrap;
  font-weight: 200;
  font-size: 14px;
  justify-content: space-between;
`
const Text2 = styled.div`
  display:flex;
  width:200px;
  font-weight: 200;
  font-size: 14px;
  flex-wrap: wrap;
  justify-content: end;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;
`

export default FormPreview;
