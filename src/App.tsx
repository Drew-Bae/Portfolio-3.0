import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import NewSection from "./components/NewSection";
import About from "./components/About";
import ProjectCardGrid from "./components/ProjectCardGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UX from "./components/UX";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "main"`, //1024px Will need to wrap GridItem with <Show above="lg"></Show>
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Hero />
        <NewSection sectionNumber="01" sectionHeading="About">
          <About maxWidth="875px" />
        </NewSection>
        <NewSection sectionNumber="02" sectionHeading="UX Portfolio">
          <UX />
        </NewSection>
        <NewSection sectionNumber="03" sectionHeading="Projects">
          <ProjectCardGrid />
        </NewSection>
        <NewSection sectionNumber="04" sectionHeading="Contact">
          <Contact />
        </NewSection>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
