import * as yup from 'yup';
const Validation = async (stateObject)=>{
    let errors;
    let validationObj = valiadtionObject(stateObject);
    let schema = yup.object().shape({
      email: yup.string().email().required(),
      phone: yup.string().required(),
      address1: yup.string().required(),
      address2: yup.string().required(),
      pin: yup.string().required(),
      state: yup.string().required()
    })
    try{
      await schema.validate(validationObj, {abortEarly: false})
      errors = true
    }
    catch(err){
        errors = {}
        err.inner.forEach((e)=>{
        console.log(e.path)
        errors[e.path] = e.message;
      });
    }
    return errors;
  }


const valiadtionObject = (object)=>{
  return {
    email: object.email,
    phone: object.phone,
    address1: object.address1,
    address2: object.address2,
    pin: object.pin,
    state: object.state
  }
}
export default Validation;