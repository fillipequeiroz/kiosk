import React from "react";
import {CheckinContext} from "../../../../context/checkin";
import {Waiting} from "../../../../component/Waiting";

export const WaitingPayment = () => {

  const context = React.useContext(CheckinContext);
  const handleClickNextStep = () => {
    context.fowardStep(context.state.step + 1);
  }

  return (
    <Waiting label={"Preparing your reservation"} secondLabel={"Please wait a while to finish"} />
  );

}
