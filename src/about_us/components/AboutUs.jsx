import { Container, Typography, Box, Link } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import "../styles/AboutUs.css";
import img_1 from "../../assets/About_us/Bail-Bonds-Affordable-Bail-Bond-Steven-Mehr-Bail-Bonds.png";
import img_2 from "../../assets/About_us/Calendar.png";
import img_3 from "../../assets/About_us/Mammography-Machine-Mammography-Service-Mammography-Dealer.png";
import img_4 from "../../assets/About_us/Notes.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container id="Apps">
      <CodeIcon className="codeIcon" />
      <Typography variant="h3" textAlign="center">
        Aplicaciones en vivo construidas
      </Typography>
      <Typography textAlign="center" paddingTop="20px">
        Aquí les comparto algunos de los proyectos creados y que se encuentran
        operativos. En estos proyectos se usaron diferentes tecnlogias como
        HTML,CSS,JS,REACT,PHP,Joomla. Siempre adaptadonse a las necesidades del
        usuario y del cliente.
      </Typography>
      <Box className="AppContainer">
        <Link href="https://www.ssmehrbailbonds.com/" target="_blank">
          <img
            src={img_1}
            className="AppLive"
            alt="App"
            data-aos="fade-out"
            data-aos-once="false"
          />
        </Link>
        <Link
          href="https://calendar-lilac-delta.vercel.app/#/auth/login"
          target="_blank"
        >
          <img
            src={img_2}
            className="AppLive"
            alt="App"
            data-aos="fade-out"
            data-aos-once="false"
          />
        </Link>
        <Link href="https://www.umacglobal.com/" target="_blank">
          <img
            src={img_3}
            className="AppLive"
            alt="App"
            data-aos="fade-out"
            data-aos-once="false"
          />
        </Link>
        <Link href="https://speed-notes.netlify.app/" target="_blank">
          <img
            src={img_4}
            className="AppLive"
            alt="App"
            data-aos="fade-out"
            data-aos-once="false"
          />
        </Link>
      </Box>
    </Container>
  );
};
