import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Link,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";
import "../index.css"; // Import your CSS file with styles

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg={isSticky ? "#0b132bff" : "#0b132bff"}
      color={isSticky ? "white" : "white"}
      height="70px"
      width="100%"
      position={isSticky ? "fixed" : "static"}
      top={isSticky ? "0" : "auto"}
      left={isSticky ? "0" : "auto"}
      right={isSticky ? "0" : "auto"}
      zIndex={isSticky ? "999" : "auto"}
    >
      <Box>
        <Text
          color="#5bc0beff"
          fontSize="lg"
          fontWeight="bold"
          transition="color 0.3s"
          _hover={{ color: "#5bc0beff" }}
        >
          <ScrollLink to="Hero" smooth={true} duration={500}>
            <Link _hover={{ textDecoration: "none" }}>D B</Link>
          </ScrollLink>
        </Text>
      </Box>

      <HStack
        spacing={10}
        display={{ base: "none", md: "flex" }}
        alignItems="center"
      >
        <Text
          fontSize="lg"
          transition="color 0.3s"
          _hover={{ color: "#5bc0beff" }}
        >
          <ScrollLink to="About" smooth={true} duration={500}>
            <Link _hover={{ textDecoration: "none" }}>About</Link>
          </ScrollLink>
        </Text>
        <Text
          fontSize="lg"
          transition="color 0.3s"
          _hover={{ color: "#5bc0beff" }}
        >
          <ScrollLink to="UX Portfolio" smooth={true} duration={500}>
            <Link _hover={{ textDecoration: "none" }}>UX Portfolio</Link>
          </ScrollLink>
        </Text>
        <Text
          fontSize="lg"
          transition="color 0.3s"
          _hover={{ color: "#5bc0beff" }}
        >
          <ScrollLink to="Project" smooth={true} duration={500}>
            <Link _hover={{ textDecoration: "none" }}>Project</Link>
          </ScrollLink>
        </Text>
        <Text
          fontSize="lg"
          transition="color 0.3s"
          _hover={{ color: "#5bc0beff" }}
        >
          <ScrollLink to="Contact" smooth={true} duration={500}>
            <Link _hover={{ textDecoration: "none" }}>Contact</Link>
          </ScrollLink>
        </Text>
      </HStack>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="unstyled"
        />
      </Box>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent height="100vh" bg="#0b132bff">
            <DrawerCloseButton
              size="lg"
              color="white"
              _hover={{ color: "red" }}
            />
            <DrawerBody>
              <Flex
                direction="column"
                align="center"
                justify="center"
                height="100%"
              >
                <Text fontSize={50} mb={20} _hover={{ color: "#5bc0beff" }}>
                  <ScrollLink to="About" smooth={true} duration={500}>
                    <Link
                      onClick={onClose}
                      color={"white"}
                      _hover={{ textDecoration: "none" }}
                    >
                      About
                    </Link>
                  </ScrollLink>
                </Text>
                <Text fontSize={50} mb={20} _hover={{ color: "#5bc0beff" }}>
                  <ScrollLink to="UX Portfolio" smooth={true} duration={500}>
                    <Link
                      onClick={onClose}
                      color={"white"}
                      _hover={{ textDecoration: "none" }}
                    >
                      UX Portfolio
                    </Link>
                  </ScrollLink>
                </Text>
                <Text fontSize={50} mb={20} _hover={{ color: "#5bc0beff" }}>
                  <ScrollLink to="Project" smooth={true} duration={500}>
                    <Link
                      onClick={onClose}
                      color={"white"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Project
                    </Link>
                  </ScrollLink>
                </Text>
                <Text
                  fontSize={50}
                  mb={20}
                  transition="color 0.3s"
                  _hover={{ color: "#5bc0beff" }}
                >
                  <ScrollLink to="Contact" smooth={true} duration={500}>
                    <Link
                      onClick={onClose}
                      color={"white"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Contact
                    </Link>
                  </ScrollLink>
                </Text>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default NavBar;
