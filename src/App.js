import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Month from "./components/Month";
import Section from "./components/Section";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Form />
      <Month />
      <Section />
      <Services />
      <Footer />
    </>
  );
}
