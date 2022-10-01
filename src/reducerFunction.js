function reducerFunction(state, action){
     switch(action.type){
        case 'INCREASE_PROGRESS':
             return{...state, progress: state.progress + 1}
          
        case 'DECREASE PROGRESS':
             return {...state, progress: state.progress - 1}
        default:
          {}
     }
}

export default reducerFunction;