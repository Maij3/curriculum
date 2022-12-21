import { Box, Container, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <Box className="FooterContainer">
      <Container className="Footer">
        <Link href="https://github.com/Maij3">
          <GitHubIcon className="codeIcon" />
        </Link>
        <Link href="https://www.linkedin.com/in/jaime-rodriguez-07944820b/">
          <LinkedInIcon className="codeIcon" />
        </Link>
      </Container>
    </Box>
  );
};
