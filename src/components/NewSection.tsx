import { Divider, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  sectionNumber: string;
  sectionHeading: string;
  children: React.ReactNode;
}

const NewSection = ({ sectionNumber, sectionHeading, children }: Props) => {
  const fontSizeHeading = useBreakpointValue({
    base: "18",
  });

  const marginHeading = useBreakpointValue({
    base: "2",
  });

  const maxWidth = useBreakpointValue({
    base: "700px",
  });

  return (
    <>
      <Flex align="center" justify="center" bg="#182139">
        <Heading
          fontSize={fontSizeHeading}
          color="#5bc0beff"
          ml={9}
          mr={marginHeading}
        >
          {sectionNumber}
        </Heading>
        <Heading fontSize={fontSizeHeading} color="white">
          {sectionHeading}
        </Heading>
        <Divider
          flex={1}
          mx={9}
          borderColor="gray.500"
          css={{
            maxWidth: maxWidth, // Set the maximum width for the divider
            "@media (max-width: maxWidth)": {
              width: "100%", // Override the width at the maximum width breakpoint
            },
          }}
        />
      </Flex>
      {children}
    </>
  );
};

export default NewSection;
