import {
  Badge,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  maxWidth: string;
  heading: string;
  badges: string[]; // Array of badge names
  link: string; // URL for the link
  picture: string;
  children: ReactNode;
}

const ProjectCard = ({
  maxWidth,
  heading,
  badges,
  link,
  picture,
  children,
}: Props) => {
  return (
    <Card maxWidth={maxWidth} mx="auto" overflow="hidden">
      <Image src={picture} />
      <CardBody p={4}>
        <Heading fontSize="1.25rem" mb={2}>
          {heading}
        </Heading>
        <Text>{children}</Text>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Button as="span" mt={3} color="#5bc0beff">
            Link
          </Button>
        </Link>
        <HStack mt={5} wrap="wrap" overflowX="auto">
          {badges.map((badge, index) => (
            <Badge colorScheme="blue" key={index} whiteSpace="nowrap">
              {badge}
            </Badge>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
