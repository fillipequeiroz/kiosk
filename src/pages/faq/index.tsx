import {Card, CardBody, Center, Text} from "@chakra-ui/react";
import React, {Fragment, useState} from "react";
import {FaqMock} from "../../mocks/faq.mock";

export const Faq = () => {

  // let {data} = useFetch('https://jsonplaceholder.typicode.com/posts', null);
  // data = FaqMock;
  const questions: ({ createdAt: string; question: string; answer: string; _id: string; hotelId: string; category: string; updatedAt: string } | { createdAt: string; question: string; answer: string; _id: string; hotelId: string; category: string; updatedAt: string } | { createdAt: string; question: string; answer: string; _id: string; hotelId: string; category: string; updatedAt: string } | { createdAt: string; question: string; answer: string; _id: string; hotelId: string; category: string; updatedAt: string } | { createdAt: string; question: string; answer: string; _id: string; hotelId: string; category: string; updatedAt: string } | { createdAt: string; question: string; answer: string; _id: string; hotelId: string; category: string; updatedAt: string } | { createdAt: string; question: string; answer: string; _id: string; hotelId: string; category: string; updatedAt: string } | { createdAt: string; question: string; answer: string; _id: string; hotelId: string; category: string; updatedAt: string })[] = FaqMock;

  const [idSelected, setIdSelected] = useState("");

  const handleClickCard = (id: string) => {
    (idSelected==="" || idSelected !== id) ? setIdSelected(id) : setIdSelected("");
  }
  const contentQuestions = () => {
    const listItems = questions.map((item) => (
        <Fragment key={item._id}>
          <Center mt={5} ml={10} mr={10} mb={5}>
            <Card w={"100%"} onClick={() => handleClickCard(item._id)} cursor={"pointer"}>
              <CardBody>{item.question}</CardBody>
            </Card>
          </Center>

          <Center>
            <Text textAlign={['left']} w="100%" fontSize="25" fontWeight={500} color={"#121212"} ml={10}>

              {idSelected === item._id ? item.answer : ''}
            </Text>
          </Center>
        </Fragment>
      ))
    ;

    return (<ul>{listItems}</ul>);
  }

  return (

    <Fragment>
      <Center mt={5}>
        <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
          Any questions? Check our FAQ for help?
        </Text>
      </Center>

      {contentQuestions()}


    </Fragment>

  );

}
