import React from "react";
import {
  Button,
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

export const SearchBar = ({ apiData }) => {
  const navigate = useNavigate();
  const [searchtext, setSearchtext] = useState("");
  const [context, setContext] = useContext(ContextProvider);
  // useEffect(() => {
  //   console.log(context, "contextcontext");
  // }, [context]);

  const handleSearch = () => {
    if (searchtext && apiData) {
      console.log(apiData);
      const filterData = apiData.filter((el) =>
        el.title?.toUpperCase().includes(searchtext?.toUpperCase())
      );
      setContext(filterData);

      // navigate(NavURL.search, { state: { message: searchtext } });
    } else {
      setContext(apiData);
      //toast show please enter search value
    }
  };
  return (
    <React.Fragment>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          name="search"
          placeholder="Search"
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />
      </InputGroup>
      <Button
        ml={4}
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </Button>
    </React.Fragment>
  );
};
