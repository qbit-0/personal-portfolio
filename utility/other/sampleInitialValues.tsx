import { Download } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import PopoverChip from "../../components/PopoverChip";
import { SampleContextType } from "../context/SampleProvider";

export const INITIAL_ACCOUNTS: SampleContextType["accounts"] = {
  0: {
    accountId: 0,
    name: "Duy Pham",
    username: "zero_1",
    traits: ["casual", "team-player"],
    banner: "/images/outer_wilds.jpeg",
    avatar: "/images/me/Stand.jpg",
    posts: new Set([0, 1, 3]),
    liked: new Set([4]),
    saved: new Set([2, 4]),
    body: (
      <>
        <Typography>
          Front-end web developer in Garden Grove, CA. Currently searching for a
          job.
        </Typography>
        <Box component="div" mt={4}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Education</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1}>
                <Typography variant="h5">Bolsa Grande High School</Typography>
                <Typography variant="h6">
                  GPA:{" "}
                  <PopoverChip
                    label="3.8"
                    text="Grade point average (max 4.0)"
                  />
                </Typography>
                <Typography variant="h6" display="inline">
                  Awards and Honors:{" "}
                  <PopoverChip
                    label="AP Scholar with Distinction"
                    text="Score of at least 3.5 on all exams taken, 3 or higher on at least 5 exams."
                  />
                </Typography>
                <Typography variant="h6">
                  Activities and societies:{" "}
                  <PopoverChip
                    label="STEM Club"
                    text="Afterschool club where me and a group of friends competeted in engineering and software engineering contests."
                  />
                </Typography>
                <Typography variant="h5">
                  University of California, San Diego
                </Typography>
                <Typography variant="h6">
                  Degree: <PopoverChip label="Bachelor of Science" />
                </Typography>
                <Typography variant="h6">
                  Major:{" "}
                  <PopoverChip
                    label="Cognitive Science (Machine Learning)"
                    text="Cognitive Science, Specialzing in Machine Learning and Neural Computation. Math, Programming, Statistics, Data Science, bit of Neuroscience"
                  />
                </Typography>
                <Typography variant="h6">
                  Academic History:{" "}
                  <Link href="pdf/academichistoryreviewpdf.pdf" download>
                    <Chip icon={<Download />} label="Download" />
                  </Link>
                </Typography>
                <Typography variant="h6">
                  GPA:{" "}
                  <PopoverChip
                    label="3.912"
                    text="Grade point average (max 4.0)"
                  />
                </Typography>
                <Box component="div">
                  <Typography display="inline" variant="h6">
                    Awards and Honors:{" "}
                  </Typography>
                  <Stack display="inline" direction="row" spacing={0.5}>
                    <PopoverChip label="Cum Laude" text="Top 14%" />
                    <PopoverChip
                      label="Provost Honors"
                      text=">3.5 GPA, All Terms"
                    />
                  </Stack>
                </Box>
                <Box component="div">
                  <Typography display="inline" variant="h6">
                    Activities and societies:{" "}
                  </Typography>
                  <Stack display="inline" direction="row" spacing={0.5}>
                    <PopoverChip
                      label="IEEE Annual Projects"
                      text="Year-long and multi-year electrical and software engineering projects"
                    />
                    <PopoverChip
                      label="Warren College Honors Society"
                      text="Membership awarded for exceptional academic performance"
                    />
                  </Stack>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I started learning programming by myself back in middle school.
                Going into high school and then contininuing into college, I was
                constantly practicing my skills by collaborating with my friends
                in various engineering and programming contests. I built robots,
                made video games, and presented my ideas in front of crowds.
                <br />
                <br />
                Here's a story. In MESA's National Engineering and Design
                Competition, teams competed in regional, state, and national
                competitions, building and pitching various products in
                technical interviews and public demonstrations. We built a
                machine to visually scan and sort stacks of papers. Initially,
                just representing Bolsa Grande High School in the regional
                competition at UC Irvine, we represented UC Irvine in the state
                competition, and California in the National competition. We got
                second place at nationals.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Gaming</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                When I'm not programming, I'm probably gaming. My curernt
                obsession is with fighting games. I like the dedication to learn
                fighting games, and the intensity of a match. I also enjoy
                colony sims like Dwarf Fortress and Rimworld, as well as
                automation sims like Factorio.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Dreams</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1}>
                <Typography>
                  Find my worth in the world by doing something that I'm good
                  at, and that I enjoy, perferably a job where I can continue to
                  learn forever. I never want to feel too comfortable, because
                  that's boring.
                </Typography>
                <Typography>
                  Have a good work-life balance so I can continue to build
                  personal projects with the skills I aquire.
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
      </>
    ),
  },
  1: {
    accountId: 1,
    name: "Inspirational Quotes",
    username: "quotes_guy",
    traits: ["inspirational"],
    banner: "/images/Albert_Einstein_Head.jpg",
    avatar: "/images/Albert_Einstein_Head.jpg",
    posts: new Set([2]),
    liked: new Set([4]),
    saved: new Set([]),
    body: (
      <>
        <Typography>Just some dude quoting things.</Typography>
      </>
    ),
  },
  2: {
    accountId: 1,
    name: "asdf",
    username: "asdf",
    traits: ["random"],
    banner:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    avatar:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    posts: new Set([2]),
    liked: new Set([1, 4]),
    saved: new Set([]),
    body: (
      <>
        <Typography>asdf</Typography>
      </>
    ),
  },
};
export const INITIAL_POSTS: SampleContextType["posts"] = {
  0: {
    postId: 0,
    author: 0,
    createdAt: Date.now() - 360000000,
    text: "Anyone excited for the Steam release of Dwarf Fortress? I really hope it gets more people into this masterpiece of a simulator. Google Dwarf Fortress dead cats, absolutely insane stories from this game.",
    media: "/images/dwarf-fortress-original-map.jpg",
    likes: 0,
    replies: new Set([]),
  },
  1: {
    postId: 1,
    author: 0,
    createdAt: Date.now() - 24090000,
    text: "Been learning Three.js so I can make a 3d geometry thing for my personal portfolio. Thinking about doing this thing where meshes are built and destroyed. Responds to user input too. Hope it's not too laggy.",
    media: "/videos/floating.mkv",
    isVideo: true,
    likes: 1,
    replies: new Set([]),
  },
  2: {
    postId: 2,
    author: 1,
    createdAt: Date.now() - 20000000,
    text: `"We cannot solve problems with the kind of thinking we employed when we came up with them." — Albert Einstein`,
    likes: 0,
    replies: new Set([]),
  },
  3: {
    postId: 3,
    author: 0,
    createdAt: Date.now() - 10000000,
    text: "Man, Outer Wilds is such a good game if you enjoy having an existential crisis. Highly recommended. Definitely one of my favorite games ever.",
    media: "/images/outer_wilds_planets.jpg",
    likes: 0,
    replies: new Set([]),
  },
  4: {
    postId: 4,
    author: 2,
    createdAt: Date.now() - 1000000,
    text: "cat",
    media:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    likes: 3,
    replies: new Set([]),
  },
  5: {
    postId: 5,
    author: 2,
    createdAt: Date.now() - 100000,
    text: "this app is so lame, there's like only 3 people here",
    likes: 0,
    replies: new Set([]),
  },
};

export const INITIAL_ACCOUNT_ID = Object.keys(INITIAL_ACCOUNTS).length;
export const INITIAL_POST_ID = Object.keys(INITIAL_POSTS).length;

export const INITIAL_USER_ACCOUNT_ID = 0;
