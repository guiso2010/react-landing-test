import React from "react";
import { Button, Container, Typography } from "@material-ui/core";

const Login = () => {
  const handleButtonClick = () => {
    alert("Hola");
  };

  return (
    <Container>
      <Typography>Text</Typography>
      <Button
        variant="outlined"
        color="textPrimary"
        onClick={handleButtonClick}
      >
        Un boton
      </Button>
    </Container>
  );
};

export default Login;
