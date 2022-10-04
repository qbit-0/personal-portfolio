import { AddComment, BookmarkAdd } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Account, Post } from "../../utility/context/SampleProvider";
import { getElapsedString } from "../../utility/other/getElapsedString";

type Props = {
  account: Account;
  post: Post;
};

const SamplePost: FC<Props> = ({ account, post }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Paper
        elevation={3}
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
        }}
      >
        <Avatar src={account.avatar} sx={{ width: 50, height: 50 }} />
      </Paper>
      <Stack width="100%">
        <Stack direction="row" spacing={1}>
          <Typography>{account.name}</Typography>
          <Typography>@{account.username}</Typography>
          <Typography>{getElapsedString(post.createdAt)}</Typography>
        </Stack>
        <Typography>{post.text}</Typography>
        {post.image && (
          <Box component="div" width="100%" overflow="clip" borderRadius={2}>
            <img src={post.image} width="100%" height="100%" />
          </Box>
        )}
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <IconButton>
            <AddComment />
          </IconButton>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
          <IconButton>
            <BookmarkAdd />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SamplePost;
