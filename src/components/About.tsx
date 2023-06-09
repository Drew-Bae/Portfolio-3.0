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
        color="gray.600"
        textAlign={"center"}
        maxWidth={maxWidth}
        mx="auto"
        pl={8}
        pr={8}
        pb={pb}
      >
        I'm Drew Bae, a web developer with a passion for creating innovative and
        user-friendly digital experiences. With expertise in HTML, CSS,
        JavaScript, React, and TypeScript, I specialize in building visually
        stunning and highly functional websites and applications. My project
        experience includes developing a Video Game Discovery App, where I
        leveraged React and Chakra UI to design an intuitive user interface,
        integrated APIs, optimized images, and improved code quality with
        TypeScript. Additionally, I have contributed to the development of a
        website for an E-Commerce Cloud Hosting Company, ensuring compliance
        with industry standards, optimizing performance, and implementing
        effective SEO techniques. With a Bachelor of Science degree in Computer
        Science from the University of Alabama at Birmingham, I constantly
        strive to stay up-to-date with the latest web development trends. If
        you're seeking a dedicated and collaborative web developer, I invite you
        to explore my portfolio to see examples of my work. Let's connect and
        discuss how I can contribute to your next web development project.
      </Text>
    </Box>
  );
};

export default About;
