import "./index.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import InfoSection from "./components/infoSection";
import Collection from "./components/collectionSection";
import Community from "./components/community";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="Homepage">
        <Navbar />

        <HeroSection />
        <InfoSection />
        <Collection />
        <Community />
        <Footer />
      </div>
    </div>
  );
}

export default App;
