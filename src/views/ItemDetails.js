import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import StarRating from "../component/Star";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useFetchSingleProductDetail } from "../service/Ecommerce";

export default function Simple() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rating, setRating] = useState("");
  const id = searchParams.get("item_id");
  const { data } = useFetchSingleProductDetail({ id });
  console.log(data);
  // useEffect(() => {
  //   if (id) {
  //     // getItemDetails();
  //   }
  // }, [id]);
  // const getItemDetails = async () => {
  //   console.log(id);
  //   console.log(result);
  //   const detaildata = await result.json();
  //   console.log(detaildata);
  //   setRating(detaildata.rating.rate);
  //   setItem(detaildata);
  // };

  return (
    <Container maxW={"7xl"}>
      {data != null && (
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          mt={20}
        >
          <Flex>
            <Image
              objectFit={"contain"}
              rounded={"md"}
              alt={data.name}
              src={data.image}
              fit={"cover"}
              align={"center"}
              w={"85%"}
              h={{ base: "85%", sm: "300px", lg: "400px" }}
              fallbackSrc="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
            />
          </Flex>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {data.title}
              </Heading>
              <Flex>
                <StarRating rating={rating} setRating={setRating} />
                <Text ml={2} color={"#4299E1"} fontSize={"xl"}>
                  {data.rating.count} Ratings
                </Text>
              </Flex>
              <Text fontWeight={300} fontSize={"2xl"} color={"gray.500"}>
                {data.description}
              </Text>
              <Text color={"#E53E3E"} fontWeight={400} fontSize={"2xl"}>
                ${data.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                // borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            ></Stack>
          </Stack>
        </SimpleGrid>
      )}
    </Container>
  );
}
