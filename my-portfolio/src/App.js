import Banner from "./Components/banner/Banner";
import Contact from "./Components/contacts/Contact";
import Features from "./Components/features/Features";
import Navbar from "./Components/navbar/Navbar";
import Resume from "./Components/resume/Resume";
import Testimonials from "./Components/testimonials/Testimonials";
import Projects from "./projects/Projects";
import Footer from "./Components/footer/Footer";
import FooterButton from "./Components/footer/FooterButton";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonials />
        <Contact />
        <Footer />
        <FooterButton />
      </div>
    </div>
  );
}

export default App;
