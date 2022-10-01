import React from 'react'
import { useContext } from 'react'
import stateContext from '../stateContext';
import '../Progressbar.css'
function ProgressBar() {
    const state = useContext(stateContext);
  return (
   <div className='progress-bar-container'>
     <div className='progress-bar' style={{backgroundColor: '#E06358'}}></div>
     <div className='progress-bar' style={{backgroundColor: state.progress >= 2 ?'#E06358':'#CCC4BA'}}></div>
     <div className='progress-bar' style={{backgroundColor: state.progress >= 3 ?'#E06358':'#CCC4BA'}}></div>
     <div className='progress-bar' style={{backgroundColor: state.progress >= 4 ?'#E06358':'#CCC4BA'}}></div>
   </div>
  )
}
export default ProgressBar
