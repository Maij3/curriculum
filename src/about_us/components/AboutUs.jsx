import { Container, Typography , Box, Link } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import "../styles/AboutUs.css";
import img_1 from "../../assets/About_us/Bail-Bonds-Affordable-Bail-Bond-Steven-Mehr-Bail-Bonds.png";
import img_2 from "../../assets/About_us/Calendar.png";
import img_3 from "../../assets/About_us/Mammography-Machine-Mammography-Service-Mammography-Dealer.png";
import img_4 from "../../assets/About_us/Notes.png";
export const AboutUs = () => {
  return (
    <Container className="AbousUS">
      <CodeIcon className="codeIcon" />
      <Typography variant="h3" textAlign="center">
        Apps Live Built
      </Typography>
      <Typography textAlign="center" paddingTop="20px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, animi
        possimus libero reprehenderit hic unde corrupti enim laudantium dolor
        molestiae accusantium esse velit delectus repellat veniam error.
        Asperiores, saepe tempora?
      </Typography>
      <Box className="AppContainer">
        <Link href="https://www.ssmehrbailbonds.com/" target="_blank">
          <img src={img_1} className="AppLive" alt="App" />
        </Link>
        <Link href="https://calendar-lilac-delta.vercel.app/#/auth/login" target="_blank">
          <img src={img_2} className="AppLive" alt="App" />
        </Link>
        <Link href="https://www.umacglobal.com/" target="_blank">
          <img src={img_3} className="AppLive" alt="App" />
        </Link>
        <Link href="https://speed-notes.netlify.app/" target="_blank">
          <img src={img_4} className="AppLive" alt="App" />
        </Link>
      </Box>
    </Container>
  );
};
