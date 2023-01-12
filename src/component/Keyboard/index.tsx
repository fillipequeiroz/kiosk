import React, {FC, useEffect, useRef, useState} from "react";
import {Box} from "@chakra-ui/react";
import {CgCloseR} from "react-icons/cg";
import Keyboard from "react-simple-keyboard";
import {CheckinContext} from "../../context/checkin";

export const KeyboardComponent:FC<{page:string}> = (props) => {

  const context = React.useContext(CheckinContext);
  const bottomRef = useRef(null);
  const [layoutName, setLayoutName] = useState("default");
  const [updateKeyboard] = useState(false);
  const keyboard = useRef(null);

  useEffect(() => {
      // @ts-ignore
    keyboard.current.input =  context.getValueFromState(props.page);
  });
  useEffect(() => {
    // @ts-ignore
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});

  }, [context.state?.keyboardVisibility]);

  const closeKeyboard = () => {
    context.closeKeyboard();
  }

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };


  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeAll = (inputs: any): any => {
    // context.state.inputs = inputs;
    context.onChangeAll(inputs, props.page);
  };

  useEffect(() => {
    console.log(updateKeyboard);
  }, [updateKeyboard])


  return (
    <Box transition={"opacity 0.3s ease"} opacity={context?.state?.opacity} display={context?.state?.keyboardVisibility}
         ref={bottomRef}
         id={"keyboardbox"} ml={10} mr={10} mb={10}
    >
      <CgCloseR size={20} cursor={"pointer"} onClick={() => closeKeyboard()}></CgCloseR>
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layoutName}
        onChangeAll={(inputs) => onChangeAll(inputs)}
        onKeyPress={onKeyPress}
        inputName={context?.state?.inputName}

      />
    </Box>);

}
