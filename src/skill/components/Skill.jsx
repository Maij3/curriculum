import { useEffect } from "react";
import MemoryIcon from "@mui/icons-material/Memory";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "../styles/Skill.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import html from "../../assets/Skills/html.png";
import css from "../../assets/Skills/css3.png";
import git from "../../assets/Skills/git.png";
import express from "../../assets/Skills/express.png";
import js from "../../assets/Skills/javascript.png";
import joomla from "../../assets/Skills/joomla.png";
import nest from "../../assets/Skills/nestjs.png";
import next from "../../assets/Skills/Next.png";
import php from "../../assets/Skills/php.png";
import react from "../../assets/Skills/react.png";
import firebases from "../../assets/Skills/firebase.png";
import github from "../../assets/Skills/github.png";
import redux from "../../assets/Skills/redux.png";
import material from "../../assets/Skills/material.png";
import docker from "../../assets/Skills/docker.png"
import Aos from "aos";
import "aos/dist/aos.css";

export const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box className="Skills" id="Skills">
      <MemoryIcon className="codeIcon" />
      <Typography variant="h3" textAlign="center">
        Habilidades y Tecnologías
      </Typography>
      <Container data-aos-anchor=".Skills">
        <Box className="Skills-img">
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={html} alt="" />
            <Typography>HTML</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={css} alt="" />
            <Typography>CSS</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={git} alt="" />
            <Typography>GIT</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={express} alt="" />
            <Typography>EXPRESS.JS</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={js} alt="" />
            <Typography>JS</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={joomla} alt="" />
            <Typography>JOOMLA</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={nest} alt="" />
            <Typography>NEST.JS</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={next} alt="" />
            <Typography>NEXT.JS</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={php} alt="" />
            <Typography>PHP</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={react} alt="" />
            <Typography>REACT.JS</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={redux} alt="" />
            <Typography>REDUX</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={material} alt="" />
            <Typography>MATERIAL UI</Typography>
          </div>
            <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={firebases} alt="" />
            <Typography>FIREBASE</Typography>
          </div>
          <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={docker} alt="" />
            <Typography>DOCKER</Typography>
          </div>
            <div className="info-2" data-aos="fade-in" data-aos-once="false">
            <img src={github} alt="" />
            <Typography>GiTHUB</Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};
