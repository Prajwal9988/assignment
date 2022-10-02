function reducerFunction(State, action){
     switch(action.type){
        case 'INCREASE_PROGRESS':
             return{...State, progress: State.progress + 1}
        case 'DECREASE PROGRESS':
             return {...State, progress: State.progress - 1}
        case 'EMAIL':
             return {...State, email: action.value}
        case 'PHONE':
             return {...State, phone: action.value}
        case 'ADDRESS1':
               return {...State, address1: action.value}
        case 'ADDRESS2':
               return {...State, address2: action.value}
        case 'PIN':
               return {...State, pin: action.value}
        case 'STATE':
               return {...State, state: action.value}
        case 'ERRORS':
               return {...State, errors: action.value}
        case 'SELECTOR':
               return {...State, plan: action.value}
        default:
          {}
     }
}
export default reducerFunction;