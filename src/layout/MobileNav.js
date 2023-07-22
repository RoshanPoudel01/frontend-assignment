import React from "react";
import {
  IconButton,
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
//Simple Mobile view
export const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      direction={"row"}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        OnlineStore
      </Text>
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            ></MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
