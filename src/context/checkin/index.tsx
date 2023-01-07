import {createContext, FC, useReducer} from "react";
import {useNavigate} from "react-router-dom";

interface IContextProps {
  state: {
    step: number,
    totalSteps: number,
    checkinCode: string,
    name: string,
    lastname: string
  };
  backStep: (step: number) => void;
  fowardStep: (step: number) => void;
}

export const CheckinContext = createContext({} as IContextProps);

export const CheckinContextProvider: FC<{ children: JSX.Element }> = ({children}) => {


  const navigate = useNavigate();


  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'BACK_STEP':
        if (action.payload.nextStep < 0) {
          navigate('/home/2');
          return;
        } else {
          navigate('/checkin/' + action.payload.nextStep);
          return {...state, step: action.payload.nextStep};
        }

      case 'NEXT_STEP':
        navigate('/checkin/' + action.payload.nextStep);
        return {...state, step: action.payload.nextStep};
    }

    return {...state}
  }

  const checkinState = {
    step: 0,
    totalSteps: 7,
    checkinCode: '',
    name: '',
    lastname: ''
  }

  const [state, dispatch] = useReducer(reducer, checkinState);

  const backStep = (nextStep: number) => {
    // navigate('/checkin/' + nextStep);
    dispatch({type: 'BACK_STEP', payload: {nextStep}});

  }

  const fowardStep = (nextStep: number) => {
    // navigate('/checkin/' + step);
    dispatch({type: 'NEXT_STEP', payload: {nextStep}});

  }


  return (<CheckinContext.Provider value={{state, backStep, fowardStep}}>{children}</CheckinContext.Provider>);
}
