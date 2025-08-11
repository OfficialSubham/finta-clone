import Container from "@/components/container";
import Hero from "@/components/hero";
import LandingImage from "@/components/landingImage";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="layout">
      <div className="layout-lines-container">
        <div className="left-line" />
        <div className="right-line" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <LandingImage />
    </div>
  );
}
