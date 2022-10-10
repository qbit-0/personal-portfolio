import {
  Accordion,
  Box,
  Chip,
  Divider,
  ImageList,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { fadeInProps } from "../../utility/other/fadeInProps";
import CustomImageListItem from "../CustomImageListItem";
import CompetitiveProjectSummary from "./CompetitiveProjectSummary";

type Props = {};

const NEDC = (props: Props) => {
  const theme = useTheme();
  const largeLayout = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Accordion elevation={1} {...fadeInProps}>
      <CompetitiveProjectSummary
        competition={"MESA National Engineering and Design Competition"}
        submission={"Document Organizing System"}
        type={"High School"}
      />
      <Divider />
      <Stack
        direction={largeLayout ? "row" : "column"}
        spacing={2}
        divider={
          <Divider orientation={largeLayout ? "vertical" : "horizontal"} />
        }
        p={2}
      >
        <Box component="div" flex={2} height="100%">
          <ImageList cols={largeLayout ? 2 : 1}>
            <CustomImageListItem
              src={"/images/competitions/NEDC/NEDC 2nd Place.jpg"}
              title="Second Place Nationals"
              description="We won second place in the national competition. I'm the
                      one in the center."
            />
            <CustomImageListItem
              src={"/images/competitions/NEDC/NEDC Barcode.jpg"}
              title="First Phototype"
              description="The first phototype used a barcode scanner."
            />
            <CustomImageListItem
              src={"/images/competitions/NEDC/NEDC Bubbles.jpg"}
              title="Bubbles"
              description="Rather than reading papers via barcodes, I learned to run
                    OpenCV on a Raspberry Pi so we could read ID bubbles
                    instead."
            />
            <CustomImageListItem
              src={"/videos/competitions/NEDC/NEDC Big.mp4"}
              title="Sliding Baskets"
              description="Our second phototype was a large machine that used rods from
                    a 3d printer to control two different baskets. We found some
                    one-way printer rollers that worked consistently."
              isVideo
            />
            <CustomImageListItem
              src={"/videos/competitions/NEDC/NEDC Sort.mp4"}
              title="Two-Way"
              description="Our third phototype simplified the design by combining two
                    one-way printer rollers into a two-way roller. Removing the
                    need to shift baskets also increased the sorting speed."
              isVideo
            />
          </ImageList>
        </Box>
        <Stack flex={1} spacing={2}>
          <Box component="div">
            <Divider>
              <Chip label="Prompt" />
            </Divider>
            <Typography>
              Design, construct, and pitch a prototype product. The top three
              highest-scoring teams would proceed through regional, and state
              completions before being accepted into the national competition.
            </Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Submission" />
            </Divider>
            <Typography>
              The Document Organizing System, a wooden machine utilizing a
              series of printer rollers to automatically scan IDs on paper tests
              and automatically sort them in lexicographic order.
            </Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Contribution" />
            </Divider>
            <Typography>
              I suggested the idea, modeled the machine on OnShape, did the
              wiring, and programed the software in Arduino and Raspberry Pi. We
              pitched the product before a series of judges in a series of
              private technical interviews and public presentations.
              <br />
              <br />
              Initially representing Bolsa Grande High School in the regional
              competition, we eventually represented UC Irvine in the statewide
              competition, and finally the state of California in the national
              competition. Through our product pitch, we were awarded second
              place in the national event in Philadelphia.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Accordion>
  );
};

export default NEDC;
