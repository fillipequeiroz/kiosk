import {Box, Center, Flex, GridItem, SimpleGrid, Text} from "@chakra-ui/react";
import React, {Fragment, useEffect, useState} from "react";
import {BsClock, BsTelephoneFill, BsWifi} from "react-icons/bs";
import {DefaultLabel} from "../../../component/Label";
import {GiHanger} from "react-icons/gi";
import {InfoButtons} from "../../../component/Button/InfoButtons";
import _ from 'lodash';

export const HotelInfo = () => {

  const API_URL = process.env.REACT_APP_API_URL;
  const [wifi, setWifi] = useState();
  const [hotelTime, setHotelTime] = useState();
  const [amenities, setAmenities] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    fetch(API_URL + 'hotel')
      .then((res) => res.json())
      .then((res) => {
        setWifi(_.first(_.get(res, 'wifi')));
        setHotelTime(_.get(res, 'hotelTime'));
        setAmenities(_.get(res, 'amenities'));
        setPhone(_.get(res, 'phone'));
      });

  }, [API_URL]);

  return <Fragment>
    <Center mt={5}>
      <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
        Hotel policy
      </Text>
    </Center>

    <InfoButtons selected={"hotel"}/>

    <SimpleGrid columns={2} columnGap={25} ml={10} mr={10} mt={5} mb={5}>

      <GridItem alignItems={"left"}>
        <Flex alignItems={"center"}>
          <Text textAlign={['left']} fontSize="22" fontWeight={700} color={"#121212"}>
            Wifi
          </Text>
          <Box ml={5}>
            <BsWifi size={25}></BsWifi>
          </Box>
        </Flex>
        <DefaultLabel text={"Network:"} valueLabel={_.get(wifi, 'networkName')} mt={0}/>
        <DefaultLabel text={"Guest password:"} valueLabel={_.get(wifi, 'guestPassword')} mt={0}/>
        <DefaultLabel text={"Home page password:"} valueLabel={_.get(wifi, 'homePagePassword')} mt={0}/>
        <DefaultLabel text={""} valueLabel={_.get(wifi, 'instructions')} mt={10}/>

        <Flex alignItems={"center"} mt={16}>
          <Text textAlign={['left']} fontSize="22" fontWeight={700} color={"#121212"}>
            Check in / Check out time
          </Text>
          <Box ml={5}>
            <BsClock size={25}></BsClock>
          </Box>
        </Flex>

        <DefaultLabel text={"Check in:"} valueLabel={_.get(hotelTime, 'checkin')} mt={10}/>
        <DefaultLabel text={"Check out:"} valueLabel={_.get(hotelTime, 'checkout')} mt={0}/>
      </GridItem>
      <GridItem>

        <Flex alignItems={"center"}>

          <Text textAlign={['center']} fontSize="22" fontWeight={700} color={"#121212"}>
            Amenities
          </Text>
          <Box ml={5}>
            <GiHanger size={25}></GiHanger>
          </Box>
        </Flex>

        <DefaultLabel text={""} valueLabel={amenities ? amenities[0]['title'] : ''} mt={0}/>
        <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#121212"}>
          {
            amenities ? amenities[0]['description'] : ''
          }
          &nbsp;
          <b>
            {
              amenities ? amenities[1]['title'] : ''
            }
          </b>
          {
            amenities ? amenities[1]['description'] : ''
          }
        </Text>

        <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#121212"} mt={10}>
          <b>
            {
              amenities ? amenities[2]['title'] : ''
            }
          </b>
          &nbsp;
          {
            amenities ? amenities[2]['description'] : ''
          }
        </Text>


        <Flex alignItems={"center"} mt={16}>
          <Text textAlign={['left']} fontSize="22" fontWeight={700} color={"#121212"}>
            Telephone
          </Text>
          <Box ml={5}>
            <BsTelephoneFill size={25}></BsTelephoneFill>
          </Box>
        </Flex>
        <DefaultLabel text={_.get(phone, 'description')} valueLabel={""} mt={10}/>
      </GridItem>
    </SimpleGrid>

  </Fragment>;

}
