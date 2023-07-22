import React from "react";
import { Flex, useColorModeValue, Text, Select } from "@chakra-ui/react";

import { SearchBar } from "../component/Searchbar";
export const HeaderNav = ({
  onOpen,
  productData,
  handleSearch,
  setSearchtext,
  limitHandler,
  sortHandler,
  ...rest
}) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      ml={{ base: 0, md: 60 }}
      p={{ base: 5, md: 7 }}
      //   height=
      alignItems={{ base: "flex-start", md: "center" }}
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between" }}
      {...rest}
      borderRadius={15}
    >
      <SearchBar
        productData={productData}
        handleSearch={handleSearch}
        setSearchtext={setSearchtext}
      />

      <Flex gap={5} mt={{ base: 3, md: 0 }}>
        {/* Limiting the number of products to view in the page  */}
        <Flex>
          <Text m={2}>Limit</Text>
          <Select placeholder="Select option" onChange={limitHandler}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="">All</option>
          </Select>
        </Flex>
        {/* Sorting the products according to id in either ascending or descending order */}
        <Flex>
          <Text m={2}>Sort</Text>
          <Select placeholder="Select option" onChange={sortHandler}>
            <option value="asce">Ascending</option>
            <option value="desc">Descending </option>
          </Select>
        </Flex>
      </Flex>
    </Flex>
  );
};
