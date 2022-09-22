import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { NavContext } from "../utility/context/NavProvider";
import SplitablePaper from "./SplitablePaper";

type Props = {};

const Skills: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.skills.setNavCallback(() => () => {
      navRef.current?.scrollIntoView({ block: "center" });
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
        }, 200)
      );
      setSplit3Timeout(
        setTimeout(() => {
          setIsSplit3(true);
          setSplit3Timeout(undefined);
        }, 300)
      );
    } else {
      setIsSplit2(false);
      setIsSplit3(false);
      clearTimeout(split2Timeout);
      clearTimeout(split3Timeout);
    }
  }, [isSplit1]);

  return (
    <Container
      ref={navRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 16,
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <Typography variant="h2" fontSize={96} fontWeight="bold">
            SKILLS
          </Typography>
          <Stack
            component={motion.div}
            spacing={8}
            onViewportEnter={() => {
              setNavValue("skills");
            }}
            viewport={{ amount: "all" }}
          >
            <SplitablePaper
              width="600px"
              height="600px"
              elevation={6}
              borderRadius={16}
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
                borderRadius={16}
                splitDirection="horizontal"
                spacing={4}
                animate={isSplit2 ? "split" : "joined"}
              >
                <Paper sx={{ flex: 1, overflow: "clip" }}>
                  <img
                    src={"/images/react-1.svg"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Paper>
                <Paper sx={{ flex: 2, overflow: "clip" }}>
                  <img
                    src={"/images/typescript-design-assets/ts-logo-128.svg"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Paper>
              </SplitablePaper>
              <SplitablePaper
                flex={2}
                borderRadius={16}
                splitDirection="horizontal"
                spacing={4}
                animate={isSplit3 ? "split" : "joined"}
              >
                <Paper sx={{ flex: 1 }}>Next.js</Paper>
                <Paper sx={{ flex: 1 }}>Three.js</Paper>
              </SplitablePaper>
            </SplitablePaper>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Skills;
