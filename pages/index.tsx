import { Box } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/Main";

export const PAGES = [
  "welcome",
  "about",
  "projects",
  "skills",
  "fun",
  "contact",
];

type HomeProps = {};

const Index: FC<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Duy Pham | Web Dev Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Duy Pham, Fullstack Developer working in Orange County, CA. This is my portfolio, come check it out."
        />
      </Head>
      <Box
        component="div"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Main />
        <Footer />
      </Box>
    </>
  );
};

export default Index;
