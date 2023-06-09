import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import gamePic from "../assets/gamehub-ss (1).png";
import moshPic from "../assets/moshify-ss (1).png";

const ProjectCardGrid = () => {
  const pb = useBreakpointValue({
    base: "20",
    md: "32",
  });

  return (
    <SimpleGrid
      id="Project"
      columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
      pl={8}
      pr={8}
      pt={20}
      pb={pb}
      spacing={5}
      bg="#182139"
    >
      <ProjectCard
        maxWidth="875px"
        heading="Game-Hub App"
        badges={[
          "React-powered",
          "API Integration",
          "Responsive Design",
          "Code Refactoring",
          "TypeScript Implementation",
          "Optimized Performance",
        ]}
        picture={gamePic}
        link="https://game-hub-lovat-gamma.vercel.app/"
      >
        In my Game-Hub App project, I created an intuitive platform for
        discovering and exploring video games. Using React and Chakra UI, I
        designed a dynamic user interface, integrated the RAWG Video Games
        Database API for up-to-date information, and prioritized responsive
        design for seamless usage across devices. With code refactoring and
        TypeScript implementation, I ensured a scalable and efficient
        application.
      </ProjectCard>
      <ProjectCard
        maxWidth="875px"
        heading="E-Commerce Cloud Hosting"
        badges={[
          "HTML & CSS Mastery",
          "JavaScript Wizardry",
          "SEO Optimization",
          "Performance Optimization",
          "GitHub Version Control",
          "Responsive Design",
        ]}
        picture={moshPic}
        link="https://moshified-model-e-commerce.netlify.app/#"
      >
        I created a robust and visually appealing website for an E-Commerce
        Cloud Hosting Company. By utilizing HTML, CSS, and JavaScript, I
        developed a user-friendly interface that aligns with design mockups.
        Implementing SEO techniques, optimizing website performance, and
        troubleshooting layout issues were key priorities. I successfully
        enhanced the website's visibility and ranking on search engine results
        pages. Throughout the project, I utilized GitHub for version control and
        collaboration, ensuring streamlined project management.
      </ProjectCard>
    </SimpleGrid>
  );
};

export default ProjectCardGrid;
