import { Box, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/react";

interface Props {
  maxWidth: string;
}

const About = ({ maxWidth }: Props) => {
  const pb = useBreakpointValue({
    base: "20",
    md: "32",
  });

  return (
    <Box id="About" pt={20} bg="#182139">
      <Text
        fontSize={20}
        color="gray.500"
        textAlign={"center"}
        maxWidth={maxWidth}
        mx="auto"
        pl={8}
        pr={8}
        pb={pb}
      >
        As a Front-End Web Developer and UX Designer, I'm dedicated to enhancing
        user experiences and creating functional digital solutions. My work
        includes projects such as a Menu Preview App, where I employed user
        research and intuitive interface design. I've also developed a Video
        Game Discovery App and an E-Commerce Cloud Hosting Company website. With
        a Bachelor of Science degree in Computer Science, I stay updated with
        the latest web development and UX design trends. Explore my portfolio to
        see examples of my work, and let's discuss how I can contribute to your
        next project.
      </Text>
    </Box>
  );
};

export default About;
