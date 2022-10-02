import React, { useContext, useState } from 'react'
import dispatchContext from '../dispatchContext'
import stateContext from '../stateContext'
import {TopHeading, Paragraph, MediumText, SmallText} from '../Styledcomponents.js'
import {ReactComponent as Down} from './icons/Arrow-bottom.svg'
import {ReactComponent as Up} from './icons/Arrow-top.svg'
import '../dropDown.css'
import DropDown from './dropDown'

function Details() {
  return (
     <div className='details-container'>
        {/* --------------------Heading---------------------------- */}
        <TopHeading>
            Choose your plan
        </TopHeading>
         {/* --------------------Paragraph------------------------- */}
         <Paragraph>
            Hello Anisha, 
            Increase yours and your familys health insurance cover by 20 lakhs with Super top up!
         </Paragraph>
         {/* --------------------Accordion------------------------- */}
            <PlanDetails />
            <br></br>
            <BasicDetails />
     </div>
  )
}

const PlanDetails = ()=>{
    const [open, handleOpen] = useState(true);
    return (
      <div className='plan-details-container'>
          <div 
            onClick={()=>handleOpen(!open)} 
            className='plan-accordion'>
            <MediumText>Plan Details</MediumText>
            {open ? <Down /> : <Up />}
          </div>
          {
            open
                ?<div className='plan-accordion-bottom'>
                    <SmallText>Your plan type</SmallText>
                    <DropDown />
                </div>
               :null
          }
      </div>
    )
}

function BasicDetails (){
    const [open, handleOpen] = useState(true);
    return(
      <div className='basic-details-container'>
          <div onClick={()=>handleOpen(!open)} className='basic-accordion'>
            <MediumText>Basic Details (Required) </MediumText>
            {open ? <Down /> : <Up />}
          </div>
          {
            open
            ? <div  className='basic-accordion-bottom'>
                <InputComponents />
              </div>
            :null
          }
      </div>  
    )
}

function InputComponents(){
    const setState = useContext(dispatchContext);
    const state = useContext(stateContext);
    console.log("from state",state.errors);
  return(
    <div className='input-components'>
            <div className='flexify email'>
                <label>Personal Email address </label>
                <input 
                name='email' 
                className='email'
                placeholder='Enter'
                value={state.email}
                onChange={(e)=> setState({type:'EMAIL', value: e.target.value})} 
                type={'text'}>
                </input>
                { state.errors.email ?
                 <span className='error'>{state.errors.email}</span>:
                 null
                }
            </div>
        <br></br>
            <div className='flexify phone'>
            <label>Mobile Number </label>
                <input 
                name='phone' 
                className='phone'
                placeholder='Enter'
                value={state.phone}
                onChange={(e)=> setState({type:'PHONE', value: e.target.value})} 
                type={'text'}>
                </input>
                { state.errors.phone ?
                 <span className='error' >{state.errors.phone}</span>:
                 null
                }
            </div>
        <br></br>
            <div className='flexify address1'>
            <label>Address 01 </label>
                <input 
                name='address1' 
                className='address1'
                placeholder='Enter'
                value={state.address1}
                onChange={(e)=> setState({type:'ADDRESS1', value: e.target.value})} 
                type={'text'}>
                </input>
                { state.errors.address1 ?
                 <span className='error'>{state.errors.address1}</span>:
                 null
                }
            </div>
        <br></br>
            <div className='flexify address2'>
                <label>Address 02 </label>
                <input 
                name='address2' 
                className='address2'
                value={state.address2}
                placeholder='Enter'
                onChange={(e)=> setState({type:'ADDRESS2', value: e.target.value})} 
                type={'text'}>
                </input>
                { state.errors.address2 ?
                 <span className='error' >{state.errors.address2}</span>:
                 null
                }
            </div>
        <br></br>
            <div className='flexify pin'>
                <label>Pincode </label>
                <input 
                name='pin' 
                className='pin'
                value={state.pin}
                placeholder='Enter'
                onChange={(e)=> setState({type:'PIN', value: e.target.value})} 
                type={'text'}>
                </input>
                { state.errors.pin ?
                 <span className='error'>{state.errors.pin}</span>:
                 null
                }
            </div>
        <br></br>
            <div className='flexify state'>
                <label>State </label>
                <input 
                name='state' 
                className='state'
                placeholder='Enter'
                value={state.state}
                onChange={(e)=> setState({type:'STATE', value: e.target.value})} 
                type={'text'}>
                </input>
                { state.errors.state ?
                 <span className='error'>{state.errors.state}</span>:
                 null
                }
            </div>
    </div>
  )
}


export default Details
