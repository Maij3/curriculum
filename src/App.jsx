import { Typography } from "@mui/material";
import { AboutUs } from "./about_us/components/AboutUs";
import { Banner } from "./banner/components/Banner";
import { NavBar } from "./components/NavBar";
import { Skill } from "./skill/components/Skill";

export const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <AboutUs />
      <Skill />
    </>
  );
};
