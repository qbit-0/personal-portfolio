import { Box, Divider, Stack } from "@mui/material";
import { FC, useContext } from "react";
import { SampleContext } from "../../utility/context/SampleProvider";
import SamplePost from "./SamplePost";

type Props = {};

const SampleHome: FC<Props> = ({}) => {
  const { posts, getAccount, targetWidth } = useContext(SampleContext);

  return (
    <Box
      component="div"
      width="100%"
      maxWidth={500}
      height="100%"
      pt={targetWidth >= 1024 ? 0 : 8}
      pb={targetWidth >= 1024 ? 4 : 8}
      overflow="auto"
      flex={1}
    >
      <Stack spacing={2} p={2} divider={<Divider />}>
        {Object.entries(posts)
          .reverse()
          .map(([postId, post], index) => (
            <SamplePost
              account={getAccount(post.author)}
              post={post}
              key={index}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default SampleHome;
