import steps from "../steps";
import { types } from "../Types/types";

const initialState = {
  steps: [],
  fullname: "",
  email: "",
  addressproperty: "",
  floorproperty: "",
  bbqzone: "",
  childrenspark: "",
  comunityhall: "",
  step: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case steps:
      return {
        ...state,
        steps: action.steps,
      };
    case types.fullname:
      return {
        ...state,
        fullname: action.payload.fullName,
      };
    case types.email:
      return {
        ...state,
        email: action.payload.emailClient,
      };
    case types.addressproperty:
      return {
        ...state,
        addressproperty: action.payload.addressProperty,
      };
    case types.floorproperty:
      return {
        ...state,
        floorproperty: action.payload.floorProperty,
      };
    case types.bbqzone:
      return {
        ...state,
        bbqzone: action.payload.bbqProperty ? " Zona BBQ " : "",
      };
    case types.comunityhall:
      return {
        ...state,
        comunityhall: action.payload.comunityHallProperty
          ? " Salon comunal "
          : "",
      };
    case types.childrenspark:
      return {
        ...state,
        childrenspark: action.payload.childrensParkProperty
          ? " Parque de niños "
          : "",
      };
    default:
      return state;
  }
};
