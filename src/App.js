import './App.css';
import styled from 'styled-components'
import Details from './components/Details';
import Payment from './components/Payment';
import Declaration from './components/Declaration';
import Confirmation from './components/Confirmation';
import FormPreview from './components/FormPreview';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import {useReducer} from 'react';
import reducerFunction from './reducerFunction';
import dispatchContext from './dispatchContext'
import stateContext from './stateContext'

const init={
  progress: 1,
  email: '',
  phone: '',
  address1: '',
  address2: '',
  pin: '',
  state: ''
}
function App() {
  const [state, dispatch] = useReducer(reducerFunction, init)
  return (
      <div className="App">
       
        <stateContext.Provider value={state}>
        <dispatchContext.Provider value={dispatch}>
          
            <ProgressBar />
            {state.progress === 1 ? <Details /> : ''}
            {state.progress === 2 ? <Payment /> : ''}
            {state.progress === 3 ? <Declaration />: ''}
            {state.progress === 4 ? <Confirmation /> : ''}
            <FormPreview />
            <Footer />
   
  
        </dispatchContext.Provider>
        </stateContext.Provider>
      </div> 
  );
  }
export default App;
