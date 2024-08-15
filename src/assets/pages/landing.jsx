import About from "../components/Landing/about";
import EndingSagara from "../components/Landing/end";
import Footer from "../components/Landing/footer";
import HowSagara from "../components/Landing/howsagara";
import Intro from "../components/Landing/intro";
import Navbar from "../components/Landing/navbar";
import WhySagara from "../components/Landing/whysagara";

export default function LandingPage() {
  return (
    <section className="mt-20">
      <Navbar />
      <Intro />
      <div className="flex flex-col gap-4 mx-0 md:mx-24 my-8 ">
        <About />
        <WhySagara />
        <HowSagara />
        <EndingSagara />
      </div>
      <Footer />
    </section>
  );
}
