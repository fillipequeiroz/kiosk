import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React, {FC, Fragment, useEffect, useState} from "react";
import {HomeButtons} from "../Button/HomeButtons";
import {ReservationButtons} from "../Button/ReservationButtons";
import {BackButton} from "../Button/BackButton";
import {useNavigate} from "react-router-dom";

const HomeImage = require("../../assets/images/home_expand.png")

export const DefaultLabel: FC<{ text: string | undefined, valueLabel: string | undefined, mt: number }> = (props) => {


  return (
    <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#121212"} mt={props.mt}>
      {props.text} <b>{props.valueLabel}</b>
    </Text>
  );

}
