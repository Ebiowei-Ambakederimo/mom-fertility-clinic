import About from "@/components/About";
import Departments from "@/components/Departments";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Appointment from "@/components/Appointment";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="treatments"><Departments /></div>
      <HowItWorks />
      <div id="success"><Testimonials /></div>
      <Blog />
      <FAQ />
      <CTA />
      <div id="booking"><Appointment /></div>
      <Footer />
    </main>
  );
}
