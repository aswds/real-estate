import Container from "src/styled/Flex";
import Hero from "./Hero";
import Steps from "./Steps";
import RecentProjects from "./RecentProjects";
import BookTransfer from "./BookTransfer";
import SubscribeSection from "./Subscribe";

function LandingPage() {
  return (
    <Container direction="column" className="my-5 gap-24">
      <Hero />
      <Steps />
      <RecentProjects />
      <BookTransfer />
      <SubscribeSection />
    </Container>
  );
}

export default LandingPage;
