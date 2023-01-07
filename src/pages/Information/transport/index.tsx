import {Center, Flex, GridItem, SimpleGrid, Text} from "@chakra-ui/react";
import React, {Fragment, useState} from "react";
import {DefaultLabel} from "../../../component/Label";
import {InfoButtons} from "../../../component/Button/InfoButtons";
import useFetch from "../../../hooks/useFetch";
import {hotelInfoMock} from "../../../mocks/hotel.info.mock";
import _ from "lodash";

export const TransportInfo = () => {

  let {data} = useFetch('https://jsonplaceholder.typicode.com/posts', null);
  data = hotelInfoMock;

  const [transportation] = useState(_.first(_.get(_.get(data, 'transportation'), 'tourism')));
  const [busSchedules] = useState(_.get(_.get(data, 'transportation'), 'busSchedules'));

  console.log(_.first(busSchedules));
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
