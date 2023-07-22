import React from "react";
import { Button, Flex, Input } from "@chakra-ui/react";

export const SearchBar = ({ handleSearch, setSearchtext }) => {
  return (
    <React.Fragment>
      <Flex
        w={{ base: "100", md: "auto" }}
        justifyContent={{ base: "space-between", md: "unset" }}
      >
        <Input
          w={"auto"}
          type="text"
          name="search"
          placeholder="Search"
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />

        <Button
          ml={4}
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </Button>
      </Flex>
    </React.Fragment>
  );
};
