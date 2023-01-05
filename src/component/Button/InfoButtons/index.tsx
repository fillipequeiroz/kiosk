import {Box, Center, Circle, Flex, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import {CheckinContext} from "../../../context/checkin";
import * as pages from "../../Tab/pages";

export const InfoButtons: React.FC<{ selected: string }> = (props) => {

  const [hotelSelected, setCheckinSelected] = useState(props.selected === 'hotel');
  const [transportSelected, setCheckoutSelected] = useState(props.selected === 'transport');
  const [covidSelected, setInfoSelected] = useState(props.selected === 'covid');

  const checkinContext = React.useContext(CheckinContext);

  const navigate = useNavigate();

  const handleClick = (page: string) => {
    let basePage = ''
    if (Object.keys(checkinContext).length > 0) {
      basePage = pages.CHECKIN_FLOW;
    } else {
      basePage = pages.CHECKOUT_FLOW;
    }

    navigate('/' + basePage + '/' + page);

  }
  return (
    <Flex gap={5} alignItems={"center"} justifyContent={"center"} mt={5}>
      <Flex backgroundColor={hotelSelected ? '#1D2939' : '#767676'} borderRadius="40px" minW={"267px"} minH={"72px"} justifyContent={"center"}
            alignItems={"center"} cursor={"pointer"} onClick={() => handleClick(pages.INFORMATION_FLOW)}>
        <Text textAlign={['center']} fontSize="28" fontWeight={700} color={"#FFFFFF"}>
          Hotel
        </Text>
      </Flex>

      <Flex backgroundColor={transportSelected ? '#1D2939' : '#767676'} borderRadius="40px" minW={"267px"} minH={"72px"} justifyContent={"center"}
            alignItems={"center"} cursor={"pointer"} onClick={() => handleClick(pages.TRANSPORT_INFO_FLOW)}>
        <Text textAlign={['center']} fontSize="28" fontWeight={700} color={"#FFF"}>
          Transport
        </Text>
      </Flex>

      <Flex backgroundColor={covidSelected ? '#1D2939' : '#767676'} borderRadius="40px" minW={"267px"} minH={"72px"} justifyContent={"center"}
            alignItems={"center"} cursor={"pointer"} onClick={() => handleClick(pages.COVID_INFO_FLOW)}>
        <Text textAlign={['center']} fontSize="28" fontWeight={700} color={"#FFF"}>
          Covid-19
        </Text>
      </Flex>
    </Flex>
  );

}
