import React from 'react';
import { Box, Flex, Spacer, Link, IconButton, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon, AddIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex align="center">
        <IconButton icon={<HamburgerIcon />} aria-label="Menu" color="white" variant="ghost" />
        
        <Link ml={4} color="white" fontWeight="bold" fontSize="xl" href="/">Home</Link>
        <Link ml={4} color="white" fontWeight="bold" fontSize="xl" href="/about">About</Link>
        <Link ml={4} color="white" fontWeight="bold" fontSize="xl" href="/contact">Contact</Link>
        
        <Spacer />
        
        <InputGroup mr={4} width="sm">
          <Input placeholder="Search" />
          <InputRightElement>
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>
        
        <Link color="white" fontWeight="bold" fontSize="xl" href="/categories">Categories</Link>
        
        <Button ml={4} colorScheme="teal" leftIcon={<AddIcon />} variant="outline">
          Add
        </Button>
        
        <Link ml={4} color="white" fontWeight="bold" fontSize="xl" href="/login">Login</Link>
        <Link ml={4} color="white" fontWeight="bold" fontSize="xl" href="/signup">Signup</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
