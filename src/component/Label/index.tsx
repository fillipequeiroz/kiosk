import {Text} from "@chakra-ui/react";
import React, {FC} from "react";

export const DefaultLabel: FC<{ text: string | undefined, valueLabel: string | undefined, mt: number }> = (props) => {


  return (
    <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#121212"} mt={props.mt}>
      {props.text} <b>{props.valueLabel}</b>
    </Text>
  );

}
