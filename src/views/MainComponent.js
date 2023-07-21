import { AbsoluteCenter, SimpleGrid, Spinner } from "@chakra-ui/react";
import Card from "../component/Card";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { HeaderNav } from "../component/HeaderMain";
import { useFetchProductDetails } from "../service/Ecommerce";
const MainComponent = () => {
  const [sort, setSort] = useState();
  const [limit, setLimit] = useState(5);

  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/details?item_id=${id}`);
  };
  const limitHandler = (event) => {
    setLimit(event.target.value);
  };
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
