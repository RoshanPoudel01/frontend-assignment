import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import React from "react";

import { useSearchParams } from "react-router-dom";

import { useFetchSingleProductDetail } from "../service/Ecommerce";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ItemDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("item_id");
  const { data } = useFetchSingleProductDetail({ id });
  function Rating({ rating, numReviews }) {
    return (
      <Box d="flex" alignItems="center">
        <Flex>
          {Array(5)
            .fill("")
            .map((_, i) => {
              const roundedRating = Math.round(rating * 2) / 2;
              if (roundedRating - i >= 1) {
                return (
                  <BsStarFill
                    key={i}
                    style={{ marginLeft: "1" }}
                    color={i < rating ? "teal.500" : "gray.300"}
                  />
                );
              }
              if (roundedRating - i === 0.5) {
                return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
              }
              return <BsStar key={i} style={{ marginLeft: "1" }} />;
            })}
        </Flex>
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && "s"}
        </Box>
      </Box>
    );
  }

  return (
    <React.Fragment>
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
                w={"100%"}
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
                <Rating
                  rating={data.rating.rate}
                  numReviews={data.rating.count}
                />
                <Text fontWeight={300} fontSize={"2xl"} color={"gray.500"}>
                  {data.description}
                </Text>
                <Text color={"#E53E3E"} fontWeight={400} fontSize={"2xl"}>
                  ${data.price}
                </Text>
                <Flex>
                  <Text fontWeight={400} fontSize={"2xl"}>
                    Quantity :
                  </Text>
                  <NumberInput
                    size="lg"
                    maxW={32}
                    defaultValue={1}
                    min={1}
                    max={10}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
                <Button mt={2} size={"lg"} backgroundColor={"#38B2AC"}>
                  Add To Cart
                </Button>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider />}
              ></Stack>
            </Stack>
          </SimpleGrid>
        )}
      </Container>
    </React.Fragment>
  );
};
export default ItemDetails;
