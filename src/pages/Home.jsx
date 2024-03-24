import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import HowItWork from "../components/HowItWork";
import SecondaryContent from "../components/SecondaryContent";
import TheToken from "../components/TheToken";

function Home() {
  return (
    <>
      <div className="heroArea">
        <Header />
        <HeroContent />
      </div>

      <SecondaryContent />
      <div className="sections">
        <div className="container-adrop">
          <HowItWork />
          <TheToken/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
