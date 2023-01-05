import {
  createContext, useReducer, FC, useEffect
} from "react";
import {useNavigate} from "react-router-dom";
import {data} from "./data";
import * as actions from "./actions";

interface IContextProps {
  state: { step: number, totalSteps: number, rate: number };
  backStep: (step: number) => void;
  forwardStep: (step: number) => void;
}

export const CheckoutContext = createContext({} as IContextProps);


export const CheckoutContextProvider: FC<{ children: JSX.Element }> = ({children}) => {
  const navigate = useNavigate();

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case actions.BACK_FLOW:
        if (action.payload.nextStep < 0) {
          navigate('/home/2');
          return;
        } else {
          navigate('/checkout/' + action.payload.nextStep);
          return {...state, step: action.payload.nextStep};
        }

      case actions.NEXT_FLOW:
        if (action.payload.nextStep > 3) {
          navigate('/home/1');
          return;
        } else {
          navigate('/checkout/' + action.payload.nextStep);
          return {...state, step: action.payload.nextStep};
        }
    }

    return {...state}
  }

  const [state, dispatch] = useReducer(reducer, data);

  const backStep = (nextStep: number) => {
    dispatch({type: actions.BACK_FLOW, payload: {nextStep}});
  }

  const forwardStep = (nextStep: number) => {
    dispatch({type: actions.NEXT_FLOW, payload: {nextStep}});
  }


  return (<CheckoutContext.Provider value={{state, backStep, forwardStep}}>{children}</CheckoutContext.Provider>);
}
