import{types} from '../Types/types';

export const bbqzone = (bbqProperty)=>{
    return{
        type:types.bbqzone,
        payload:{
            bbqProperty,
        }
    }
}
export const comunityhall = (comunityHallProperty)=>{
    return{
        type:types.comunityhall,
        payload:{
            comunityHallProperty,
        }
    }
}
export const childrenspark = (childrensParkProperty)=>{
    return{
        type:types.childrenspark,
        payload:{
            childrensParkProperty,
        }
    }
}