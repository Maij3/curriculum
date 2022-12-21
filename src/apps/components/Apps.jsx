import { Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import people from "../../assets/AppLive/people.jpeg";
import "../styles/AppsLive.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AppsLive = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container id="AboutUs">
      <AccountCircleIcon className="codeIcon" />
      <Typography variant="h3" textAlign="center">
        Acerca de mí
      </Typography>
      <Box className="AboutUs">
        <Box className="infoImg" data-aos-anchor=".AboutUs">
          <img
            src={people}
            data-aos="fade-left"
            data-aos-once="false"
            className="people"
            alt="Jaime Rodriguez"
          />
        </Box>
        <Box>
          <Typography>
            <b>Soy Jaime Rodriguez</b>
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            <b>
              Ingeniero Informático, Web Master, Product Developer, coach y
              mentor profesional.
            </b>
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Llevo desarrollando productos con tecnología desde el 2010. Cuando
            finalice mis estudios de Ingeniería Informática las materias que más
            me marcaron por la sencillez de poder crear algo de la nada fueron
            las asignaturas de programación. Así que busque mi primera
            oportunidad en el mundo del desarrollo de páginas web y SEO con
            Google, desempeñando un rol de liderazgo.
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Me encanta codificar y entregar Software de calidad teniendo buenas
            prácticas en los procesos de desarrollo y siempre teniendo en cuenta
            las necesidades de los clientes y Usuarios.
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Estoy acostumbrado a transmitir mis conocimientos y ayudar a mis
            compañeros de trabajo a desarrollar sus propias competencias. Me
            encanta aprender y rodearme de gente más inteligente o con más
            experiencia que yo, esto me hace mejorar a nivel profesional y
            personal.
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Creo firmemente en la mejora continua. Disfruto de cada oportunidad
            que tengo para aprender y me adapto rápido a los cambios. Mi
            versatilidad me permite tener diferente tipo de funciones y poder
            adaptar de una manera rápida.
          </Typography>
          <Box className="infoEmail">
            <Link href="mailto:jaimerodriguez123456@gmail.com">
              <AlternateEmailIcon />
              jaimerodriguez123456@gmail.com
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
