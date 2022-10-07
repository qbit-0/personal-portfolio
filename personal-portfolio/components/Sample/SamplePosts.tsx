import { Box, Divider, Stack } from "@mui/material";
import { FC, useContext } from "react";
import { Post, SampleContext } from "../../utility/context/SampleProvider";
import SamplePost from "./SamplePost";

type Props = {};

const SamplePosts: FC<Props> = ({}) => {
  const { userAccountId, getAccount, getPost, targetWidth } =
    useContext(SampleContext);

  const userAccount = getAccount(userAccountId);

  const accountPosts: Post[] = [];
  userAccount.posts.forEach((postId) => {
    accountPosts.push(getPost(postId));
  });

  return (
    <Box
      component="div"
      width="100%"
      height="100%"
      pt={targetWidth >= 1024 ? 0 : 8}
      pb={targetWidth >= 1024 ? 4 : 8}
      overflow="auto"
      flex={1}
    >
      <Stack spacing={2} mx={2} py={2} divider={<Divider />}>
        {accountPosts.reverse().map((post, index) => (
          <SamplePost account={userAccount} post={post} key={index} />
        ))}
      </Stack>
    </Box>
  );
};

export default SamplePosts;
