import { Box } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/react";

const UX = () => {
  const pb = useBreakpointValue({
    base: "20",
    md: "32",
  });
  const iframeWidth = useBreakpointValue({
    base: "350",
    md: "875",
  });
  const iframeHeight = useBreakpointValue({
    base: "250",
    md: "569",
  });

  return (
    <Box
      id="UX Portfolio"
      bg={"#182139"}
      display={"flex"}
      justifyContent={"center"}
      pt={20}
      pb={pb}
    >
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQEnnDQA46Oj-SHPSRW4yhNF9x5xXanHMrP4EZpZ5mSWfaw27gslWfiaUCuf4pJlyE82BbrGmlOfVwJ/embed?start=false&loop=true&delayms=10000"
        width={iframeWidth}
        height={iframeHeight}
      ></iframe>
    </Box>
  );
};

export default UX;
