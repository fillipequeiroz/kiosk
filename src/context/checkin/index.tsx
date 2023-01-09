import {createContext, FC, useReducer} from "react";
import {useNavigate} from "react-router-dom";
import {data} from "./data";
import * as actions from "./actions";

interface IContextProps {
  state: {
    step: number,
    totalSteps: number,
    visitingPet: boolean,
    petPolicyChecked: boolean,
    policyChecked: boolean,
    additionalGuests: any[],
    count: number,
    inputsSearch: {},
    inputs: {},
    inputsCustomerInfo: {},
    fieldsCustomerInfo: [
      { "phone": { value: '', error: boolean } },
      { "zipcode": { value: '', error: boolean } },
      { "country": { value: '', error: boolean } },
      { "email": { value: '', error: boolean } },
      { "address": { value: '', error: boolean } },
      { "city": { value: '', error: boolean } },
      { "state": { value: '', error: boolean } },
    ],
    customerInfoValid: boolean,
    keyboard: any,
    keyboardVisibility: string,
    opacity: number,
    inputName: string
  };
  backStep: (step: number) => void;
  fowardStep: (step: number) => void;
  onChangeAll: (inputs: any, page: string) => void;
  handleRemoveAdditionalGuest: (idToRemove: number) => void;
  getInputValueFromAdditionalGuests: (inputName: any, id: number) => any;
  getInputValue: (inputName: any, page: any) => any;
  openKeyboard: () => any;
  closeKeyboard: () => any;
  handleAddNewAdditionalGuest: () => any;
  getValueFromState: (attribute: string) => any;
  isValidField: (field: string, page: string) => boolean;
  validateAllFields: (page: string) => any;

  setInputName(name: string): void;
}

export const CheckinContext = createContext({} as IContextProps);

export const CheckinContextProvider: FC<{ children: JSX.Element }> = ({children}) => {


  const navigate = useNavigate();

  const INPUT_CUSTOMER_INFO = "inputsCustomerInfo";


  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case actions.BACK_FLOW:
        if (action.payload.nextStep < 0) {
          navigate('/home/2');
          return;
        } else {
          navigate('/checkin/' + action.payload.nextStep);
          return {...state, step: action.payload.nextStep};
        }

      case actions.NEXT_FLOW:
        navigate('/checkin/' + action.payload.nextStep);
        return {...state, step: action.payload.nextStep};

      case actions.SAVE_INPUT:
        if ("addGuests" === action.payload.page) {
          let newArrayGuest: any[] = generateGuestArrayByInputs(state, action);
          ;
          return {...state, inputs: action.payload.inputs, additionalGuests: newArrayGuest};
        }
        if ("inputsSearch" === action.payload.page) {
          return {...state, inputsSearch: action.payload.inputs};
        }
        if (INPUT_CUSTOMER_INFO === action.payload.page) {
          const {fieldsCustomerInfo} = state;
          fieldsCustomerInfo.map((input: any) => {
            const attribute = Object.keys(input)[0];
            const attributeValue = action.payload.inputs[attribute];
            input[attribute]['error'] = !attributeValue;
            input[attribute]['value'] = attributeValue;
          });

          return {...state, inputsCustomerInfo: action.payload.inputs};
        }
        return {...state}

      case actions.OPEN_KEYBOARD:
        return {...state, keyboardVisibility: 'block', opacity: 1};
      case actions.CLOSE_KEYBOARD:
        return {...state, keyboardVisibility: 'none', opacity: 0};
      case actions.CHANGE_INPUT_NAME:
        return {...state, inputName: action.payload.name};
      case actions.REMOVE_GUEST:
        action.payload.inputs = state.inputs;
        return removeGuest(state, action);
      case actions.ADD_GUEST:
        const {additionalGuests} = state;
        let newGuest: any = {};
        newGuest['id'] = state.count;
        newGuest['name' + state.count] = '';
        additionalGuests.push(newGuest);
        return {...state, additionalGuests, count: state.count + 1};
      case actions.VALIDATE_FIELDS:
        const {fieldsCustomerInfo} = state;
        let customerInfoValid = true;
        fieldsCustomerInfo.map((input: any) => {
          let attribute = Object.keys(input)[0];
          input[attribute]['error'] = !input[attribute]['value'];
          if(customerInfoValid && input[attribute]['error']){
            customerInfoValid = false;
          }
        })

        return {...state, fieldsCustomerInfo, customerInfoValid};
    }

    return {...state}
  }

  const generateGuestArrayByInputs = (state: any, action: any) => {
    let newArrayGuest: any[] = [];
    Object.keys(action.payload.inputs).map(key => {
      const value = action.payload.inputs[key];
      const id = key.substring(4, key.length);
      let newGuest: any = {};
      newGuest['id'] = id;
      newGuest[key] = value;
      newArrayGuest.push(newGuest);
    });
    return newArrayGuest;
  }

  const removeGuest = (state: any, action: any) => {
    let newArrayGuest: any[] = generateGuestArrayByInputs(state, action);
    const index = newArrayGuest.findIndex(guest => guest.id == action.payload.idToRemove);
    if (index > 0) {
      newArrayGuest.splice(index, 1)

      let inputs: any = {};
      newArrayGuest.reduce((result: any, item: any) => {
        var key = Object.keys(item)[1];
        result[key] = item[key];
        return result;
      }, inputs);

      return {...state, additionalGuests: newArrayGuest, inputs};
    }
    return {...state}
  }


  const [state, dispatch] = useReducer(reducer, data);

  const backStep = (nextStep: number) => {
    dispatch({type: actions.BACK_FLOW, payload: {nextStep}});
  }

  const fowardStep = (nextStep: number) => {
    dispatch({type: actions.NEXT_FLOW, payload: {nextStep}});
  }

  const onChangeAll = (inputs: any, page: string): void => {
    dispatch({type: actions.SAVE_INPUT, payload: {inputs, page}});
  };

  const getInputValueFromAdditionalGuests = (inputName: any, id: number) => {
    return state.inputs && state.inputs[inputName + id]
  };

  const getInputValue = (inputName: any, page: any) => {
    return state[page][inputName] || "";
  };

  const openKeyboard = () => {
    dispatch({type: actions.OPEN_KEYBOARD});
  }
  const closeKeyboard = () => {
    dispatch({type: actions.CLOSE_KEYBOARD});
  }

  const setInputName = (name: string) => {
    dispatch({type: actions.CHANGE_INPUT_NAME, payload: {name}});
  }

  const handleRemoveAdditionalGuest = (idToRemove: number) => {
    dispatch({type: actions.REMOVE_GUEST, payload: {idToRemove}});
  }

  const handleAddNewAdditionalGuest = () => {
    dispatch({type: actions.ADD_GUEST});
  }

  const getValueFromState = (attribute: string) => {
    return state[attribute];
  }

  const isValidField = (field: string, page: string): boolean => {
    if (INPUT_CUSTOMER_INFO === page) {
      let fields = state.fieldsCustomerInfo.filter((input: any) => {
        return Object.keys(input)[0] === field;
      });
      if (fields && fields[0]) {
        return fields[0][field]['error'];
      }
    }
    return false;
  }

  const validateAllFields = (page: string) => {
    dispatch({type: actions.VALIDATE_FIELDS, payload: {page}});
  }

  return (<CheckinContext.Provider value={{
    state,
    backStep,
    fowardStep,
    onChangeAll,
    getInputValueFromAdditionalGuests,
    openKeyboard,
    setInputName,
    handleRemoveAdditionalGuest,
    handleAddNewAdditionalGuest,
    closeKeyboard,
    getInputValue,
    getValueFromState,
    isValidField,
    validateAllFields
  }}>{children}</CheckinContext.Provider>);
}
