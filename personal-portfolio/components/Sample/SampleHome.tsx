import { Divider, Paper, Stack } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { SampleContext, Post } from "../../utility/context/SampleProvider";
import SamplePost from "./SamplePost";

type Props = {};

const SampleHome: FC<Props> = ({}) => {
  const { posts, getAccount } = useContext(SampleContext);

  return (
    <>
      <Stack spacing={2} mx={2} py={2} divider={<Divider />}>
        {Object.entries(posts).map(([postId, post], index) => (
          <SamplePost
            account={getAccount(post.author)}
            post={post}
            key={index}
          />
        ))}
      </Stack>
    </>
  );
};

export default SampleHome;
