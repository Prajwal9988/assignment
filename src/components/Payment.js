import React, { useContext } from 'react'
import BackButtonComponent from './BackButtonComponent';
import {TopHeading,SmallText, MediumText} from '../Styledcomponents.js'
import '../payment.css'
import dispatchContext from '../dispatchContext';
import stateContext from '../stateContext';
function Payment() {
  return (
    <div className="payments-container">
      <div className='payment-heading-region'>
        <BackButtonComponent />
        <div class="heading-class">
        <TopHeading>Select your deductible amount  </TopHeading>
        <SmallText>Select the deductible amount for the policy (or policies below)</SmallText>
        </div>
      </div>
      <InputSlider />
    </div>
  )
}
function InputSlider(){
  const setState = useContext(dispatchContext);
  const state = useContext(stateContext);
  return(
    <div className='input-slider-container'>
      <div className='input-slider-top'>
        <MediumText>Self (Individual)</MediumText>
        <MediumText>John Doe</MediumText>
      </div>
      <div className='input-slider-bottom'>
        <SmallText>Sum insured of Rs: 20,00,000 with a deductible of {state.range}</SmallText>
        <input className='range' onChange={(e)=>{setState({type:'SLIDER', value: (e.target.value/20)*100000})}} type={'range'}></input>
      </div>
      <div className ='checkbox-input'>
        <input className='checkBox-color' type={'checkbox'}></input>
        <SmallText>I understand that the insurance will not be utilized until Rs3,00,000 (deductuble) is exhausted</SmallText>
      </div>
  </div>
  )
}
export default Payment;