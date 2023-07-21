import { SimpleGrid } from "@chakra-ui/react";
import Card from "../component/Card";
import { Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import ContextProvider from "../Context";
import { HeaderNav } from "../component/HeaderMain";
import { useFetchProductDetails } from "../service/Ecommerce";
const MainComponent = () => {
  const [sort, setSort] = useState();
  const [limit, setLimit] = useState(5);

  const navigate = useNavigate();
  const handleDetails = (id) => {
    console.log(id);
    navigate(`/details?item_id=${id}`);
  };
  const limitHandler = (event) => {
    // setLimit(value);
    console.log(event.target.value);
    setLimit(event.target.value);
  };
  const sortHandler = (event) => {
    console.log(event.target.value);

    setSort(event.target.value);
  };

  let { data: productData } = useFetchProductDetails({ sort, limit });
  const [searchtext, setSearchtext] = useState("");
  const [data, setData] = useState();
  // const [context, setContext] = useContext(ContextProvider);
  useEffect(() => {
    if (productData) {
      setData(productData);
    }
  }, [productData]);

  const handleSearch = () => {
    console.log("tig");
    console.log(searchtext);
    if (searchtext && productData) {
      const filterData = productData.filter((el) =>
        el.title?.toUpperCase().includes(searchtext?.toUpperCase())
      );
      setData(filterData);
      // return productData;
      // navigate(NavURL.search, { state: { message: searchtext } });
    } else {
      setData(productData);

      // return productData;
      //toast show please enter search value
    }
  };
  return (
    <React.Fragment>
      {console.log("heteee")}
      <HeaderNav
        productData={productData}
        setSearchtext={setSearchtext}
        handleSearch={handleSearch}
        sortHandler={sortHandler}
        limitHandler={limitHandler}
      />
      <SimpleGrid
        columns={{ lg: 4, md: "3", sm: "1" }}
        // mt={12}
        ml={{ base: 0, md: 60 }}
      >
        {data?.map((x, index) => (
          <Card
            maxW="md"
            name={x.title}
            price={x.price}
            imageURL={x.image}
            rating={x.rating.rate}
            numReviews={x.rating.count}
            onClick={() => {
              handleDetails(x.id);
            }}
          ></Card>
          // <Card
          //   maxW="sm"
          //   key={index}
          //   p={4}
          //   m={3}
          //   onClick={() => {
          //     handleDetails(x.id);
          //   }}
          // >
          //   <CardBody>
          //     <Image
          //       objectFit={"contain"}
          //       src={x.image}
          //       alt="Item Image"
          //       height={200}
          //       width={300}
          //       borderRadius="lg"
          //       fallbackSrc="https://res.cloudinary.com/dnjy9jxbk/image/upload/v1683388418/Ramesh%20Dai%20Ko%20Hotel.png"
          //     />
          //     <Stack mt="6" spacing="3">
          //       <Tooltip label={x.title} aria-label="A tooltip">
          //         <Heading
          //           size="sm"
          //           onClick={() => {
          //             handleDetails(x.id);
          //           }}
          //           fontWeight={500}
          //         >
          //           {truncate(x.title)}
          //         </Heading>
          //       </Tooltip>

          //       <Text color="blue.500" fontSize="l">
          //         ${x.price}
          //       </Text>
          //     </Stack>
          //   </CardBody>
          // </Card>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default MainComponent;
