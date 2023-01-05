import {Box, Center, Flex, GridItem, SimpleGrid, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {BsClock, BsTelephoneFill, BsWifi} from "react-icons/bs";
import {DefaultLabel} from "../../../component/Label";
import {GiHanger} from "react-icons/gi";
import {InfoButtons} from "../../../component/Button/InfoButtons";

export const HotelInfo = () => {


  let fragment = <><Fragment>
    <Center mt={5}>
      <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
        Hotel policy
      </Text>
    </Center>

    <InfoButtons selected={"hotel"} />


    <SimpleGrid columns={2} columnGap={25} ml={10} mr={10} mt={5}>
      <GridItem alignItems={"left"}>
        <Flex alignItems={"center"}>
          <Text textAlign={['left']} fontSize="22" fontWeight={700} color={"#121212"}>
            Wifi
          </Text>
          <Box ml={5}>
            <BsWifi size={40}></BsWifi>
          </Box>
        </Flex>
        <DefaultLabel text={"Network:"} valueLabel={"BR"} mt={0}/>
        <DefaultLabel text={"Guest password:"} valueLabel={"Brisa8342"} mt={0}/>
        <DefaultLabel text={"Home page password:"} valueLabel={"Brisa"} mt={0}/>
        <DefaultLabel text={""} valueLabel={"Connect a computer / phone to Wi-Fi for guests"} mt={10}/>
        <DefaultLabel text={"1. Turn on Wifi"} valueLabel={""} mt={0}/>
        <DefaultLabel text={"2. Connect to BR+convidado"} valueLabel={""} mt={0}/>
        <DefaultLabel text={"3. Enter the password: Brisa 8342"} valueLabel={""} mt={0}/>
        <DefaultLabel text={"4. The home page appears, so enther the password 'Brisa' and check the box below it"}
                      valueLabel={""} mt={0}/>
        <DefaultLabel text={"5. You are connecter!"} valueLabel={""} mt={0}/>

        <Flex alignItems={"center"} mt={16}>
          <Text textAlign={['left']} fontSize="22" fontWeight={700} color={"#121212"}>
            Check in / Check out time
          </Text>
          <Box ml={5}>
            <BsClock size={40}></BsClock>
          </Box>
        </Flex>

        <DefaultLabel text={"Check in"} valueLabel={"4pm"} mt={10}/>
        <DefaultLabel text={"Check out"} valueLabel={"11am"} mt={0}/>
      </GridItem>
      <GridItem>

        <Flex alignItems={"center"}>

          <Text textAlign={['center']} fontSize="22" fontWeight={700} color={"#121212"}>
            Amenities
          </Text>
          <Box ml={5}>
            <GiHanger size={30}></GiHanger>
          </Box>
        </Flex>

        <DefaultLabel text={""} valueLabel={"Laundry -3rd floor"} mt={0}/>
        <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#121212"}>
          Washing and dryin machines $ 3.50 each Rooms accept, <b>Credit / Debit Card (1st and 2nd Floor -</b>
          Request Access Key) Market, ice machine, cash machine, swimming pool and businesse center in the lobby
        </Text>

        <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#121212"} mt={10}>
          <b>Obs.:</b> Please, if possible, leave the AC unit inside the rooms on at all times around 70-72 degrees
          because of the high humidity in FLorida
        </Text>


        <Flex alignItems={"center"} mt={16}>
          <Text textAlign={['left']} fontSize="22" fontWeight={700} color={"#121212"}>
            Telephone
          </Text>
          <Box ml={5}>
            <BsTelephoneFill size={30}></BsTelephoneFill>
          </Box>
        </Flex>
        <DefaultLabel text={"Free local calls, dial directly"} valueLabel={""} mt={10}/>
      </GridItem>
    </SimpleGrid>

  </Fragment></>;
  return fragment;

}
