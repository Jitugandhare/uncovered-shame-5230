import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box p={4} bg="teal.500" color="white">
      <Flex align="center" justify="space-between">
        <Link href="/" fontSize="xl" fontWeight="bold">
          Music Store
        </Link>
        <nav >
          <Link href="/" mr={4}>
            Home
          </Link>
          <Link href="/contact" mr={4}>
            Contact
          </Link>

          <Link href="/products" mr={4}>
            Products
          </Link>
          <Link href="/about">About</Link>
          
        </nav>
      </Flex>
    </Box>
  );
};

export default Navbar;
