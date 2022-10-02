import React, { useContext } from 'react'
import '../dropDown.css'
// import { ReactComponent as Child} from './icons/Child.svg'
// import {ReactComponent as Down} from './icons/Arrow-bottom.svg'
// import {MediumTextFont} from '../Styledcomponents'
import dispatchContext from '../dispatchContext'


function DropDown() {
    const setState = useContext(dispatchContext)
  return (
       <div className='drop-down-menu'>   
            <select className='selector-size' onChange={(e)=> {setState({type:'SELECTOR',value:e.targeet.value})}}>
                <option selected hidden> -- Please Select --</option>
                <option value={['self',600]}> Self (Rs: 600)</option>
                <option value={['Parents',0]}> Parents (Rs: 0)</option>
                <option value={['Self + Parents',600]}> Self + Parents (Rs: 600)</option>
                <option value={['Self + Parents + Kids',1800]}> Self + Parents + Kids (Rs: 1800)</option>
            </select>
      
       </div>
  )
}

export default DropDown