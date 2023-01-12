import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Text
} from "@chakra-ui/react";
import React, {Fragment, useEffect, useState} from "react";

export const Faq = () => {

  const API_URL = process.env.REACT_APP_API_URL;

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(API_URL + 'hotel/faq')
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res.data);
      });
  }, [API_URL]);


  const contentQuestions = () => {
    return questions.map((item: any) => (
      <Fragment key={item._id}>


        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                {item.question}
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {item.answer}
          </AccordionPanel>
        </AccordionItem>


      </Fragment>
    ))
      ;

  }

  return (

    <Fragment>
      <Center mt={5}>
        <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
          Any questions? Check our FAQ for help?
        </Text>
      </Center>

      <Accordion allowToggle allowMultiple={false} defaultIndex={[0]}>
        {contentQuestions()}
      </Accordion>

    </Fragment>

  );

}
