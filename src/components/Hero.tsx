import {
  Box,
  Heading,
  useBreakpointValue,
  Text,
  Button,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const fontSizeHeading = useBreakpointValue({
    base: "23",
    md: "45",
    lg: "45",
  });

  const pyHeading = useBreakpointValue({
    base: "20",
    md: "32",
  });

  const fontSizeText = useBreakpointValue({
    base: "19",
    md: "24",
  });

  const pxText = useBreakpointValue({
    base: "5",
    md: "5",
    lg: "24",
    xl: "60",
  });

  return (
    <Box id="Hero" bg="#182139" color="white" py={pyHeading} textAlign="center">
      <Heading fontSize={fontSizeHeading}>Hi, my name is Drew.</Heading>
      <Heading fontSize={fontSizeHeading} color="#5bc0beff">
        I'm a UX Designer / Web Developer.
      </Heading>
      <Text fontSize={fontSizeText} color="gray.500" py={12} px={pxText}>
        Welcome to my portfolio! I'm Drew Bae, a Front-End Web Developer and UX
        Designer based in the United States. I excel in crafting user-friendly
        web experiences, leveraging HTML, CSS, JavaScript, React, and
        TypeScript. With a keen eye for UX research, Wireframing, and Usability
        Testing, I'm passionate about creating intuitive interfaces that elevate
        user satisfaction. Let's connect and enhance your web development
        projects through my combined expertise in frontend development and UX
        design.
      </Text>
      <a
        href="https://www.linkedin.com/in/drew-bae-744919202/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          bg="#5bc0beff"
          color="#182139"
          borderRadius="50px"
          px={6}
          mb={2}
          _hover={{ bg: "#3FA2A0" }}
        >
          Let's Connect!
        </Button>
      </a>
      <Spacer />
      <ScrollLink to="Contact" smooth={true} duration={500}>
        <Link fontSize={16} color="blue.200">
          Contact Me
        </Link>
      </ScrollLink>
    </Box>
  );
};

export default Hero;
