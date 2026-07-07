import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "@/components/About";
import Departments from "@/components/Departments";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="treatments"><Departments /></div>
      <HowItWorks />
      <div id="success"><Testimonials /></div>
      <Footer />
    </main>
  );
}
