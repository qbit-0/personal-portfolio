import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { NavContext } from "../utility/context/NavProvider";
import SplitablePaper from "./SplitablePaper";

type Props = {};

const Skills: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.skills.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  const [isSplit1, setIsSplit1] = useState(false);
  const [isSplit2, setIsSplit2] = useState(false);
  const [isSplit3, setIsSplit3] = useState(false);

  const [split2Timeout, setSplit2Timeout] = useState<NodeJS.Timeout>();
  const [split3Timeout, setSplit3Timeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (isSplit1) {
      setSplit2Timeout(
        setTimeout(() => {
          setIsSplit2(true);
          setSplit2Timeout(undefined);
        }, 100)
      );
      setSplit3Timeout(
        setTimeout(() => {
          setIsSplit3(true);
          setSplit3Timeout(undefined);
        }, 200)
      );
    } else {
      setIsSplit2(false);
      setIsSplit3(false);
      clearTimeout(split2Timeout);
      clearTimeout(split3Timeout);
    }
  }, [isSplit1]);

  const [hoverItem, setHoverItem] = useState<string | null>(null);

  let leftPanel: JSX.Element;
  switch (hoverItem) {
    case "react":
      leftPanel = (
        <Typography variant="h2" fontSize={96} fontWeight="bold">
          React
        </Typography>
      );
      break;
    case "typescript":
      leftPanel = (
        <Typography variant="h2" fontSize={96} fontWeight="bold">
          TypeScript
        </Typography>
      );
      break;
    default:
      leftPanel = (
        <Box
          component="div"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" fontSize={96} fontWeight="bold">
            SKILLS
          </Typography>
        </Box>
      );
      break;
  }

  return (
    <Container
      component={motion.div}
      ref={navRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 16,
      }}
      onViewportEnter={() => {
        setNavValue("skills");
      }}
    >
      <ClickAwayListener onClickAway={() => setHoverItem(null)}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <Paper
            elevation={hoverItem === null ? 0 : 6}
            sx={{ width: "500px", height: "500px" }}
          >
            {leftPanel}
          </Paper>
          <SplitablePaper
            width="500px"
            height="500px"
            elevation={6}
            splitDirection="vertical"
            spacing={4}
            animate={isSplit1 ? "split" : "joined"}
            onViewportEnter={() => {
              setIsSplit1(true);
            }}
            onViewportLeave={() => {
              setIsSplit1(false);
            }}
            viewport={{ amount: "all" }}
          >
            <SplitablePaper
              flex={3}
              splitDirection="horizontal"
              spacing={4}
              animate={isSplit2 ? "split" : "joined"}
            >
              <Paper
                component={motion.div}
                elevation={hoverItem === "react" ? 12 : undefined}
                sx={{ flex: 1, overflow: "clip" }}
              >
                <Button
                  onClick={() => {
                    setHoverItem("react");
                  }}
                  sx={{ width: "100%", height: "100%", p: 0 }}
                >
                  <img
                    src={"/images/react-1.svg"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Button>
              </Paper>
              <Paper
                component={motion.div}
                elevation={hoverItem === "typescript" ? 12 : undefined}
                sx={{ flex: 2, overflow: "clip" }}
              >
                <Button
                  onClick={() => {
                    setHoverItem("typescript");
                  }}
                  sx={{ width: "100%", height: "100%", p: 0 }}
                >
                  <img
                    src={"/images/typescript-design-assets/ts-logo-128.svg"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Button>
              </Paper>
            </SplitablePaper>
            <SplitablePaper
              flex={2}
              splitDirection="horizontal"
              spacing={4}
              animate={isSplit3 ? "split" : "joined"}
            >
              <Paper sx={{ flex: 1 }}>Next.js</Paper>
              <Paper sx={{ flex: 1 }}>Three.js</Paper>
            </SplitablePaper>
          </SplitablePaper>
        </Stack>
      </ClickAwayListener>
    </Container>
  );
};

export default Skills;
