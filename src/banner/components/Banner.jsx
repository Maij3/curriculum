import { Box, Typography } from "@mui/material";
import "../styles/background.css";
import img_1 from "../../assets/programador-web-wordpress-en-lima.png";
import { Typewriter } from "react-simple-typewriter";
export const Banner = () => {
  return (
    <Box className="background">
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
      <Box className="info">
        <img src={img_1} alt="Dev" className="img_1" />
        <Typography variant="h2" className="title_1">
          Hi There! <br /> <span className="name">I'M JAIME RODRIGUEZ </span>
          <br />
            <Typewriter
              loop
              cursorStyle="_"
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={10000}
              words={["Developer"]}
            />
        </Typography>
      </Box>
    </Box>
  );
};
