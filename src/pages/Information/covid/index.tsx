import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React, {Fragment, useEffect, useState} from "react";
import {DefaultLabel} from "../../../component/Label";
import {InfoButtons} from "../../../component/Button/InfoButtons";
import {hotelInfoMock} from "../../../mocks/hotel.info.mock";
import _ from "lodash";

export const CovidInfo = () => {

  // let {data} = useFetch('https://jsonplaceholder.typicode.com/posts', null);

  const API_URL = process.env.REACT_APP_API_URL;
  const [covid, setCovid] = useState();

  useEffect(() => {
    fetch(API_URL + 'hotel')
      .then((res) => res.json())
      .then((res) => {
        setCovid(_.get(res, 'covid'));
      });

  }, [API_URL]);

  return (

    <Fragment>
      <Center mt={5}>
        <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
          Hotel policy
        </Text>
      </Center>

      <InfoButtons selected={"covid"}/>

      <Box ml={10} mr={10} mt={10} mb={10}>
        <Flex alignItems={"center"}>
          <Text textAlign={['left']} fontSize="22" fontWeight={700} color={"#121212"}>
            {_.get(covid, 'title')}
          </Text>
        </Flex>
        <br/>
        <DefaultLabel text={_.get(covid, 'description')} valueLabel={""} mt={0}/>
      </Box>
    </Fragment>

  );

}
