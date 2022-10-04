import { Divider, Stack } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { Post, SampleContext } from "../../utility/context/SampleProvider";
import SamplePost from "./SamplePost";

type Props = { accountId: number };

const SamplePosts: FC<Props> = ({ accountId }) => {
  const { accounts, getAccount, getPost } = useContext(SampleContext);

  const account = useMemo(() => getAccount(accountId), [accountId]);

  const accountPosts = useMemo(() => {
    const accountPosts: Post[] = [];
    account.posts.forEach((postId) => {
      accountPosts.push(getPost(postId));
    });
    return accountPosts;
  }, [account]);

  return (
    <>
      <Stack spacing={2} mx={2} py={2} divider={<Divider />}>
        {accountPosts.map((post, index) => (
          <SamplePost account={account} post={post} key={index} />
        ))}
      </Stack>
    </>
  );
};

export default SamplePosts;
