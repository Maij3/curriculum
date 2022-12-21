import { Box, Typography } from "@mui/material";
import "../styles/background.css";
import img_1 from "../../assets/programador-web-wordpress-en-lima.png";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);
  return (
    <Box className="background" id="background">
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <Box className="info" data-aos-anchor=".background">
        <img
          src={img_1}
          alt="Dev"
          data-aos="fade-right"
          data-aos-once="false"
          className="img_1"
        />
        <Typography variant="h2" className="title_1">
          ¡Hola! <br /> <span className="name">SOY JAIME RODRIGUEZ </span>
          <br />
          <Typewriter
            loop
            cursorStyle="_"
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={10000}
            words={["Desarrollador" , "Ingeniero Informático"]}
          />
        </Typography>
      </Box>
    </Box>
  );
};
