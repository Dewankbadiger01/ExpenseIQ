import LandingNavbar from "../Component/Landing/LandingNavbar";
import Hero from "../Component/Landing/Hero";
import Features from "../Component/Landing/Features";
import Testimonials from "../Component/Landing/Testimonials";
import CTA from "../Component/Landing/CTA";
import Footer from "../Component/Landing/Footer";

const Landing = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <LandingNavbar />

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Landing;