import{types} from '../Types/types';
import steps from '../steps';

export const loadSteps = () => ({
  type: 'LOAD_STEPS',
  steps
})

export const fullname = (fullName)=>{
    return{
        type:types.fullname,
        payload:{
            fullName,
        }
    }
}

export const email = (emailClient)=>{
    return{
        type:types.email,
        payload:{
            emailClient,
        }
    }
}

export const addressproperty = (addressProperty)=>{
    return{
        type:types.addressproperty,
        payload:{
            addressProperty,
        }
    }
}

export const floorproperty = (floorProperty)=>{
    return{
        type:types.floorproperty,
        payload:{
            floorProperty,
        }
    }
}

