import React, {FC} from "react";
import {Waiting} from "../../../../component/Waiting";

export const WaitingPage: FC<{ label: string, secondLabel: string }> = (props) => {

  return (
    <Waiting label={props.label} secondLabel={props.secondLabel}/>
  );

}
