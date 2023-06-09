import { Box, HStack, Heading, Link, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <Box id="Contact" textAlign="center" pt={20} bg="#182139">
      <Heading fontSize={"1.875em"} mb={5}>
        Let's stay in touch!
      </Heading>
      <Text fontSize={"1.125em"} color="#5bc0beff" mb={6}>
        drewbae912@gmail.com
      </Text>
      <HStack justify="center" spacing={4} pb={36}>
        <Link
          href={"https://www.linkedin.com/in/drew-bae-744919202/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaLinkedin} boxSize={6} />
        </Link>
        <Link
          href={"https://github.com/Drew-Bae"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaGithub} boxSize={6} />
        </Link>
        <Link
          href={"https://www.instagram.com/drewbae_ig/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
        <Link href={"mailto:drewbae912@gmail.com"}>
          <Icon as={FaEnvelope} boxSize={6} />
        </Link>
      </HStack>
    </Box>
  );
};

export default Contact;
