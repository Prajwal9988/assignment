import React from 'react'

function Details() {
  return (
    <>
     <div>
        <span> Hello Anisha, 
            Increase yours and your familys health insurance cover by 20 lakhs
        </span>
        <br></br>
        <PlanDetails />
        <BasicDetails />
     </div>

    </>
  )
}

const PlanDetails = ()=>{
  
    return (
        <div className='details-container'>
        <span>Plan Details</span>    
        <label>Your plan type</label>
        <br></br>
            <select>
            <option value={'self'}>Self</option>
            <option value={'Parents'}>Parents</option>
            <option value={'Self and Parents'}>Self parents</option>
            </select>
        <br></br>   
        </div>
    )
}

const BasicDetails = ()=>{


return(
    <>
   <form >
        <label>Personal Email address :</label>
        <input type={'text'}></input>
        <br></br>
        <label>Mobile Number :</label>
        <input type={'text'}></input>
        <br></br>
        <label>Address 01 :</label>
        <input type={'text'}></input>
        <br></br>
        <label>Address 02 :</label>
        <input type={'text'}></input>
        <br></br>
        <label>Pincode :</label>
        <input type={'text'}></input>
        <br></br>
        <label>State :</label>
        <input type={'text'}></input>
        <input label={'NAME'} type={'submit'}></input>
    </form>
    
    </>
)
}
export default Details
