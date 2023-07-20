import {
  Image,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiCall } from "../helper/Axios";
import { useContext } from "react";
import ContextProvider from "../Context";
const MainComponent = () => {
  const [context, setContext] = useContext(ContextProvider);

  const navigate = useNavigate();
  const handleDetails = (id) => {
    console.log(id);
    navigate(`/details?item_id=${id}`);
  };

  const truncate = (input) =>
    input?.length > 20 ? `${input.substring(0, 20)}...` : input;

  return (
    <React.Fragment>
      <SimpleGrid columns={{ lg: 4, md: "3", sm: "1" }} mt={12}>
        {context?.map((x, index) => (
          <Card
            maxW="sm"
            key={index}
            p={4}
            m={3}
            onClick={() => {
              handleDetails(x.id);
            }}
          >
            <CardBody>
              <Image
                src={x.image}
                alt="Item Image"
                height={200}
                width={300}
                borderRadius="lg"
                fallbackSrc="https://res.cloudinary.com/dnjy9jxbk/image/upload/v1683388418/Ramesh%20Dai%20Ko%20Hotel.png"
              />
              <Stack mt="6" spacing="3">
                <Tooltip label={x.title} aria-label="A tooltip">
                  <Heading
                    size="sm"
                    onClick={() => {
                      handleDetails(x.id);
                    }}
                    fontWeight={500}
                  >
                    {truncate(x.title)}
                  </Heading>
                </Tooltip>

                <Text color="blue.500" fontSize="l">
                  ${x.price}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default MainComponent;
