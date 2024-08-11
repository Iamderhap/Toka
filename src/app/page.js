import Beginner from "@/Components/Beginner/Beginner";
import Footer from "@/Components/Footer";
import Mission from "@/Components/Our-mission/Mission";
import Story from "@/Components/Our-story/Story";
import Team from "@/Components/Our-team/Team";
import Partnership from "@/Components/Partnership/Partnership";
import Section6 from "@/Components/Section6/Section6";
import Section5 from "@/Components/What-we-do/Section5";

export default function Home() {
  return (
      <>
          <Story/>
          <Mission/>
          <Section5/>
          <Beginner/>
          <Team/>
          <Section6/>
          <Partnership/>
          {/* <Footer/> */}
      </>
  );
}
