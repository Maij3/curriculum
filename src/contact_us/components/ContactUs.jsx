import React, { useRef, useState } from "react";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import programacion from "../../assets/Pragramacion.gif";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "../styles/ContactUs.css";
import emailjs from "@emailjs/browser";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const formData = {
  user_name: " ",
  user_email: "",
  message: "",
};

export const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const form = useRef();

  const { user_email, user_name, message, onInputChange, onResetForm } =
    useForm(formData);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_d4y16yl",
        form.current,
        "8bM7eVcAPiWQV8kYO"
      )
      .then(
        (result) => {
          console.log(result.text);
          onResetForm();
          Swal.fire("Message sent", "Thank you", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box className="ContactUs" id="ContactUS">
      <img src={programacion} alt="" />
      <Container className="form-info" id="form-info">
        <Typography variant="h3">Contáctame</Typography>
        <Typography>
          Para más información me pueden contactar vía email o vía correo
          electrónico.
        </Typography>
        <Box className="form-vertical">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-in"
            data-aos-once="false"
            data-aos-anchor=".ContactUs"
          >
            <Box className="form-control">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                name="user_name"
                value={user_name}
                onChange={onInputChange}
                id="user_name"
                required
              />
            </Box>
            <Box className="form-control">
              <label htmlFor="">Correo</label>
              <input
                type="email"
                name="user_email"
                value={user_email}
                onChange={onInputChange}
                id="user_email"
                required
              />
            </Box>
            <Box className="form-control">
              <label htmlFor="">Mensaje</label>
              <textarea
                name="message"
                value={message}
                onChange={onInputChange}
                id="message"
                cols="30"
                rows="10"
                required
              ></textarea>
            </Box>
            <Box className="form-control">
              <Button variant="text" type="submit" className="btn-style">
                Enviar
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};
