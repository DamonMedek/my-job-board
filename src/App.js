import { props } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Month from "./components/Month";
import Section from "./components/Section";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  var path = useLocation().pathname;
  switch (path) {
    case "/webDev":
      var webData = props[0].webDev;
      break;
    case "/appDev":
      var webData = props[0].appDev;
      break;
    default:
  }

  return (
    <Routes>
      <Route
        path={path}
        element={
          <>
            <Navbar />
            <Hero data={webData} />
            <Form />
            <Month />
            <Section />
            <Services />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
