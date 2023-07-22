import { AbsoluteCenter, SimpleGrid, Spinner } from "@chakra-ui/react";
import Card from "../component/Card";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { HeaderNav } from "../component/HeaderMain";
import { useFetchProductDetails } from "../service/Ecommerce";
const MainComponent = () => {
  const [sort, setSort] = useState();
  const [limit, setLimit] = useState();
  //Navigation to details page
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/details?item_id=${id}`);
  };
  //helps us to select limit from dropdown
  const limitHandler = (event) => {
    setLimit(event.target.value);
  };
  //Determine the sorting order
  const sortHandler = (event) => {
    setSort(event.target.value);
  };

  let { data: productData, isLoading } = useFetchProductDetails({
    sort,
    limit,
  });
  const [searchtext, setSearchtext] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    if (productData) {
      setData(productData);
    }
  }, [productData]);
  //Search functionality from title using filter
  const handleSearch = () => {
    if (searchtext && productData) {
      const filterData = productData.filter((el) =>
        el.title?.toUpperCase().includes(searchtext?.toUpperCase())
      );
      setData(filterData);
    } else {
      setData(productData);
    }
  };

  return (
    <React.Fragment>
      {/* HeaderNav component is used to display the header and search functionality */}
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
        {/* Spinner is used to display the loading state */}
        {isLoading && (
          <AbsoluteCenter>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </AbsoluteCenter>
        )}
        {/* Card component is used to display the product details */}
        {data?.map((x, index) => (
          <Card
            maxW="md"
            id={x.id}
            name={x.title}
            price={x.price}
            imageURL={x.image}
            rating={x.rating.rate}
            numReviews={x.rating.count}
            onClick={() => {
              handleDetails(x.id);
            }}
          ></Card>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default MainComponent;
