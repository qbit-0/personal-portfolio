import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { SampleContextType } from "./context/SampleProvider";

export const initialAccounts: SampleContextType["accounts"] = {
  0: {
    accountId: 0,
    name: "Duy Pham",
    username: "dreamer_one",
    traits: ["quick-learner", "dedicated", "persistent"],
    banner: "https://picsum.photos/200/200",
    avatar: "https://picsum.photos/200/200",
    posts: new Set([0, 1]),
    liked: new Set([]),
    saved: new Set([]),
    body: (
      <>
        <Typography>
          Front-end web developer in Garden Grove, CA. Currently searching for a
          job. I love competitive games, even though I'm pretty terrible at
          them.
        </Typography>
        <Box component="div" mt={4}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography width="33%">Education</Typography>
              <Typography>My formal education</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Bolsa Grande High School</Typography>
              <Typography>University of California, San Diego</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography width="33%">Experience</Typography>
              <Typography>Learning from life</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography width="33%">Gaming</Typography>
              <Typography>What I do outside of work</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography width="33%">Dreams</Typography>
              <Typography>Goals and aspirations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </>
    ),
  },
};
export const initialPosts: SampleContextType["posts"] = {
  0: {
    postId: 0,
    author: 0,
    createdAt: Date.now(),
    text: "Test post.",
    image: "https://picsum.photos/200/200",
    replies: new Set([]),
  },
  1: {
    postId: 1,
    author: 0,
    createdAt: Date.now(),
    text: "Test post 2.",
    image: "https://picsum.photos/200/200",
    replies: new Set([]),
  },
};

export const initialAccountId = Object.keys(initialAccounts).length;
export const initialPostId = Object.keys(initialPosts).length;
