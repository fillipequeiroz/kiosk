import {Center, Flex, GridItem, SimpleGrid, Text} from "@chakra-ui/react";
import React, {Fragment, useEffect, useState} from "react";
import {DefaultLabel} from "../../../component/Label";
import {InfoButtons} from "../../../component/Button/InfoButtons";
import _ from "lodash";

export const TransportInfo = () => {

  const API_URL = process.env.REACT_APP_API_URL;
  const [transportation, setTransportation] = useState();
  const [busSchedules, setBusSchedules] = useState();

  useEffect(() => {
    fetch(API_URL + 'hotel')
      .then((res) => res.json())
      .then((res) => {
        setTransportation(_.first(_.get(_.get(res, 'transportation'), 'tourism')));
        setBusSchedules(_.get(_.get(res, 'transportation'), 'busSchedules'));
      });

  }, [API_URL]);


  return (
    <Fragment>
      <Center mt={5}>
        <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
          Hotel policy
        </Text>
      </Center>

      <InfoButtons selected={"transport"}/>

      <SimpleGrid columns={2} columnGap={25} ml={10} mr={10} mt={5}>
        <GridItem alignItems={"left"}>
          <Flex alignItems={"center"}>
            <Text textAlign={['left']} fontSize="22" fontWeight={700} color={"#121212"}>
              {_.get(transportation, 'title')}
            </Text>
          </Flex>
          <br/>
          <DefaultLabel text={_.get(transportation, 'description')} valueLabel={""} mt={0}/>
        </GridItem>

        <GridItem>

          <Flex alignItems={"center"}>
            <Text textAlign={['center']} fontSize="22" fontWeight={700} color={"#121212"}>
              {_.get(_.first(busSchedules), 'title')}
            </Text>
          </Flex>
          <br/>
          <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#121212"}>
            {_.get(_.first(busSchedules), 'description')}
          </Text>
          <br/>
          <Flex alignItems={"center"}>
            <Text textAlign={['center']} fontSize="22" fontWeight={700} color={"#121212"}>
              {_.get(_.last(busSchedules), 'title')}
            </Text>
          </Flex>
          <br/>
          <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#121212"} mb={10}>
            {_.get(_.last(busSchedules), 'description')}
          </Text>

        </GridItem>
      </SimpleGrid>

    </Fragment>

  );

}
