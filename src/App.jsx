import { AboutUs } from "./about_us/components/AboutUs";
import { AppsLive } from "./apps/components/Apps";
import { Banner } from "./banner/components/Banner";
import { NavBar } from "./components/NavBar";
import {ContactUs} from "./contact_us/components/ContactUs";
import { Footer } from "./footer/components/Footer";
import { Skill } from "./skill/components/Skill";

export const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <AppsLive/>
      <Skill />
      <AboutUs />
      <ContactUs/>
      <Footer />
    </>
  );
};
