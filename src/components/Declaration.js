import React from 'react'
import BackButtonComponent from './BackButtonComponent'
import {MediumText,TopHeading,SmallText} from '../Styledcomponents'
import '../payment.css'

function Declaration() {
  return (
    <div className='declaration-container'>
      <div className='payment-heading-region'>
        <BackButtonComponent />
        <div class="heading-class">
        <TopHeading>Declaration</TopHeading>
        <SmallText></SmallText>
        </div>
      </div>
      <br></br>
      <input className='checkBox-color' type={'checkbox'}></input>
      <MediumText>I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.</MediumText>
      <br></br>
      <input className='checkBox-color' type={'checkbox'}></input>   
      <MediumText>I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.</MediumText> 
      <br></br>
      <input className='checkBox-color' type={'checkbox'}></input>   
      <MediumText>I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)</MediumText> 
      <br></br>
      <input className='checkBox-color' type={'checkbox'}></input>   
      <MediumText>I understand that this policy doesn't cover Pre-existing diseases.</MediumText> 
      <br></br>
     
    </div>
    
  )
}

export default Declaration