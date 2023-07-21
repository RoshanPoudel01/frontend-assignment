import React from "react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import { NavURL } from "../helper/Navlink";
import ContextProvider from "../Context";
import { useEffect } from "react";
import { useContext } from "react";

export const SearchBar = ({
  productData,
  handleSearch,
  setSearchtext,

}) => {
  const navigate = useNavigate();

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
