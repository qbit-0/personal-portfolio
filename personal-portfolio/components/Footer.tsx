import { Container, Paper, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { NavContext } from "../utility/context/NavProvider";

type Props = {};

const Footer: FC<Props> = (props) => {
  return (
    <footer>
      <Paper elevation={6}>
        <Container>
          <Typography>Designed and built by me.</Typography>
        </Container>
      </Paper>
    </footer>
  );
};

export default Footer;
