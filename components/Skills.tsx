import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { NavContext } from "../utility/context/NavProvider";
import { fadeInProps } from "../utility/other/fadeInProps";
import SplitablePaper from "./SplitablePaper";

type Props = {};

const Skills: FC<Props> = (props) => {
  const theme = useTheme();
  const bigGaps = useMediaQuery(theme.breakpoints.up("sm"));
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

  const [targetItem, setTargetItem] = useState<string | null>(null);

  let infoText: JSX.Element;
  switch (targetItem) {
    case "react":
      infoText = <Typography variant="h2">REACT</Typography>;
      break;
    case "typescript":
      infoText = <Typography variant="h2">TYPESCRIPT</Typography>;
      break;
    case "java":
      infoText = <Typography variant="h2">JAVA</Typography>;
      break;
    case "mui":
      infoText = <Typography variant="h2">MATERIAL UI</Typography>;
      break;
    default:
      infoText = <Typography variant="h2">SKILLS</Typography>;
      break;
  }

  return (
    <Box component="div">
      <Container
        component={motion.div}
        ref={navRef}
        maxWidth="md"
        sx={{
          py: 16,
        }}
        onViewportEnter={() => {
          setNavValue("skills");
        }}
        viewport={{ amount: 0.5 }}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          {...fadeInProps}
        >
          {infoText}
        </Box>
        <Box component="div" display="flex" justifyContent="center">
          <ClickAwayListener onClickAway={() => setTargetItem(null)}>
            <Box {...fadeInProps}>
              <SplitablePaper
                width={["300px", "500px", "500px"]}
                height={["300px", "500px", "500px"]}
                elevation={2}
                splitDirection="vertical"
                spacing={bigGaps ? 4 : 2}
                animate={isSplit1 ? "split" : "joined"}
                onViewportEnter={() => {
                  setIsSplit1(true);
                }}
                onViewportLeave={() => {
                  setIsSplit1(false);
                  setTargetItem(null);
                }}
                viewport={{ amount: 0.8 }}
              >
                <SplitablePaper
                  flex={3}
                  splitDirection="horizontal"
                  spacing={bigGaps ? 4 : 2}
                  animate={isSplit2 ? "split" : "joined"}
                >
                  <Paper
                    component={motion.div}
                    elevation={targetItem === "react" ? 8 : undefined}
                    sx={{
                      flex: 1,
                      overflow: "clip",
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    <Button
                      onMouseOver={() => {
                        setTargetItem("react");
                      }}
                      onMouseLeave={() => {
                        setTargetItem(null);
                      }}
                      sx={{ width: "100%", height: "100%" }}
                    >
                      <img
                        alt="React logo"
                        src={"/images/blank-react.svg"}
                        className="contain fill block"
                      />
                    </Button>
                  </Paper>
                  <Paper
                    component={motion.div}
                    elevation={targetItem === "typescript" ? 8 : undefined}
                    sx={{
                      flex: 2,
                      overflow: "clip",
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    <Button
                      onMouseOver={() => {
                        setTargetItem("typescript");
                      }}
                      onMouseLeave={() => {
                        setTargetItem(null);
                      }}
                      sx={{ width: "100%", height: "100%" }}
                    >
                      <img
                        alt="TypeScript logo"
                        src={"/images/blank-ts.svg"}
                        className="fill block"
                      />
                    </Button>
                  </Paper>
                </SplitablePaper>
                <SplitablePaper
                  flex={2}
                  splitDirection="horizontal"
                  spacing={bigGaps ? 4 : 2}
                  animate={isSplit3 ? "split" : "joined"}
                >
                  <Paper
                    component={motion.div}
                    elevation={targetItem === "java" ? 8 : undefined}
                    sx={{
                      flex: 2,
                      overflow: "clip",
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    <Button
                      onMouseOver={() => {
                        setTargetItem("java");
                      }}
                      onMouseLeave={() => {
                        setTargetItem(null);
                      }}
                      sx={{ width: "100%", height: "100%" }}
                    >
                      <img
                        alt="Java logo"
                        src={"/images/blank-java.svg"}
                        className="contain fill block"
                      />
                    </Button>
                  </Paper>
                  <Paper
                    component={motion.div}
                    elevation={targetItem === "mui" ? 8 : undefined}
                    sx={{
                      flex: 2,
                      overflow: "clip",
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    <Button
                      onMouseOver={() => {
                        setTargetItem("mui");
                      }}
                      onMouseLeave={() => {
                        setTargetItem(null);
                      }}
                      sx={{ width: "100%", height: "100%" }}
                    >
                      <img
                        alt="Material UI logo"
                        src={"/images/blank-mui.svg"}
                        className="contain fill block"
                      />
                    </Button>
                  </Paper>
                </SplitablePaper>
              </SplitablePaper>
            </Box>
          </ClickAwayListener>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
