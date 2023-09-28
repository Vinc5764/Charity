import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Charity from "./components/Charity";
import Testimonial from "./components/Testimonial";
import Donate from "./components/Donate";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Charity />
      <Gallery />
      <Testimonial />
      <Donate />
      <Footer />
    </div>
  );
};

export default App;
