import { AddComment, BookmarkAdd, BookmarkAdded } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useContext } from "react";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Account,
  Post,
  SampleContext,
} from "../../utility/context/SampleProvider";
import { getElapsedString } from "../../utility/other/getElapsedString";

type Props = {
  account: Account;
  post?: Post;
};

const SamplePost: FC<Props> = ({ account, post }) => {
  const {
    userAccountId,
    getAccount,
    deletePost,
    likePost,
    unlikePost,
    savePost,
    unsavePost,
  } = useContext(SampleContext);

  if (post === undefined) return null;

  const userAccount = getAccount(userAccountId);

  const isLiked = userAccount.liked.has(post.postId);
  const isSaved = userAccount.saved.has(post.postId);
  const isAuthor = post.author === userAccountId;

  const handleLike = () => {
    if (isLiked) {
      unlikePost(userAccountId, post.postId);
    } else {
      likePost(userAccountId, post.postId);
    }
  };

  const handleSave = () => {
    if (isSaved) {
      unsavePost(userAccountId, post.postId);
    } else {
      savePost(userAccountId, post.postId);
    }
  };

  const handleDelete = () => {
    deletePost(post.postId);
  };

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
          <Typography fontWeight="bold">{account.name}</Typography>
          <Typography color="red">@{account.username}</Typography>
          <Typography color="gray">
            {getElapsedString(post.createdAt)}
          </Typography>
        </Stack>
        <Typography>{post.text}</Typography>
        {post.media && (
          <Box component="div" width="100%" overflow="clip" borderRadius={0.5}>
            {post.isVideo ? (
              <video src={post.media} controls width="100%" height="100%" />
            ) : (
              <img
                src={post.media}
                title="post image"
                width="100%"
                height="100%"
              />
            )}
          </Box>
        )}
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <IconButton>
            <AddComment />
          </IconButton>
          <Stack direction="row" alignItems="center">
            <IconButton
              onClick={handleLike}
              color={isLiked ? "success" : "default"}
            >
              <ThumbUpIcon />
            </IconButton>
            <Typography>{post.likes}</Typography>
          </Stack>
          <IconButton
            onClick={handleSave}
            color={isSaved ? "success" : "default"}
          >
            {isSaved ? <BookmarkAdded /> : <BookmarkAdd />}
          </IconButton>
          {isAuthor && (
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SamplePost;
