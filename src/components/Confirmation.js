import React from 'react'
import BackButtonComponent from './BackButtonComponent'
import '../confirmation.css'
import {MediumText,TopHeading,SmallText} from '../Styledcomponents'
import '../payment.css'
function Confirmation() {
    /* Remove all the deuplicates and create a seperate component */
  return (
      <div className='confirmation-container'>
        <div className='payment-heading-region'>
        <BackButtonComponent />
        <div class="heading-class">
        <TopHeading>Review and confirm Payment</TopHeading>
        <SmallText></SmallText>
        </div>
        </div>
        <br></br>
        <div className='confirmation'>
        <div className='eachComponent'>
            <span>Plan selected</span>
            <span>One</span>
        </div>
        <div className='eachComponent'>
            <span>Plan selected</span>
            <span>One</span>
        </div>
        <div className='eachComponent'>
            <span>Plan selected</span>
            <span>One</span>
        </div>
        <div className='eachComponent'>
            <span>Plan selected</span>
            <span>One</span>
        </div>
        <div className='eachComponent'>
            <span>Plan selected</span>
            <span>One</span>
        </div>
        <div className='eachComponent'>
            <span>Plan selected</span>
            <span>One</span>
        </div>
    </div>
    </div>
  )
}

export default Confirmation