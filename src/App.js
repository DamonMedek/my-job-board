import { props } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule/Tabs";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  var path = useLocation().pathname;
  switch (path) {
    case "/":
      var webData = props[0].webDev;
      break;
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
        path= "/dashboard"
        element={
          <>
            <Dashboard />
          </>
        }
      />
      <Route
        path={path}
        element={
          <>
            <Navbar />
            <Hero data={webData} />
            <Schedule />

            <Section />
            <Services />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
