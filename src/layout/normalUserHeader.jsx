import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  InputGroup,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputLeftElement,
  Button
} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Search2Icon } from '@chakra-ui/icons';
import { useState } from 'react';
import { NavURL } from '../helper/Navlink';
import { useNavigate } from 'react-router';
import { SearchBar } from '../component/Searchbar';
import ContextProvider from '../Context';
import { apiCall } from '../helper/Axios';
import { useEffect } from 'react';


const Links = [
  { name: "Home", url: NavURL?.Dashboard },
  // { name: "Cart", url: NavURL?.cart },

]

const NavLink = ({ children, url }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={url ? url : "#"}>
    {children}
  </Link>
);


export default function NormalUserNav({ children }) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [context, setContext] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    // console.log(context);
    const { data } = await apiCall.get("products");
    setContext(data);
    setData(data)
  };

  return (
    <ContextProvider.Provider value={[context, setContext]}>
      <Box bg="whiteblue.background" color="whiteblue.color" px={20} position={"fixed"} width={"100%"} zIndex={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <IoMdCloseCircle /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <NavLink key={index} url={link?.url && link?.url}>{link?.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <SearchBar apiData={data} />

          </Flex>
        </Flex>
      </Box>

      <Box p={4} height={"100%"}>{children}</Box>
    </ContextProvider.Provider>
  );
}