import { createContext, FC, useState } from "react";

import produce from "immer";
import React from "react";

export type Account = {
  accountId: number;
  name: string;
  username: string;
  traits: string[];
  banner: string;
  avatar: string;
  body: React.ReactNode;
  posts: Set<number>;
  liked: Set<number>;
  saved: Set<number>;
};

export type Post = {
  postId: number;
  author: number;
  createdAt: number;
  text: string;
  image?: string;
  replies: Set<number>;
};

export type SampleContextType = {
  accounts: Record<number, Account>;
  posts: Record<number, Post>;
  userAccountId: number;
  getAccount: (accountId: number) => Account;
  addPost: (postId: Omit<Post, "id" | "created">) => void;
  getPost: (postId: number) => Post;
  deletePost: (postId: number) => void;
  likePost: (accountId: number, postId: number) => void;
  unlikePost: (accountId: number, postId: number) => void;
  savePost: (accountId: number, postId: number) => void;
  unsavePost: (accountId: number, postId: number) => void;
  targetWidth: number;
};

export const SampleContext = createContext<SampleContextType>(
  {} as SampleContextType
);

type Props = {
  children: React.ReactNode;
  initialAccounts?: Record<number, Account>;
  initialAccountId?: number;
  initialPosts?: Record<number, Post>;
  initialPostId?: number;
  initialUserAccountId?: number;
  targetWidth: number;
};

const PostsProvider: FC<Props> = ({
  children,
  initialAccounts = {},
  initialAccountId = 0,
  initialPosts = {},
  initialPostId = 0,
  initialUserAccountId = 0,
  targetWidth,
}) => {
  const [accounts, setAccounts] =
    useState<Record<number, Account>>(initialAccounts);
  const [currAccountId, setCurrAccountId] = useState(initialAccountId);

  const [posts, setPosts] = useState<Record<number, Post>>(initialPosts);
  const [currPostId, setCurrPostId] = useState(initialPostId);

  const [userAccountId, setUserAccountId] =
    useState<number>(initialUserAccountId);

  const getAccount = (accountId: number) => accounts[accountId];

  const addPost = (post: Omit<Post, "postId" | "created">) => {
    setPosts(
      produce((draft) => {
        draft[currPostId] = {
          ...post,
          postId: currPostId,
          createdAt: Date.now(),
        };
      })
    );
    setCurrPostId(currPostId + 1);
  };

  const getPost = (postId: number) => posts[postId];

  const deletePost = (postId: number) => {
    setPosts(
      produce((draft) => {
        delete draft[postId];
      })
    );
    setAccounts(
      produce((draft) => {
        Object.keys(draft).forEach((accountId, index) => {
          draft[accountId as unknown as number].saved.delete(postId);
        });
      })
    );
  };

  const likePost = (accountId: number, postId: number) => {
    if (!Object.keys(posts).includes(postId.toString())) return;
    setAccounts(
      produce((draft) => {
        draft[accountId].liked.add(postId);
      })
    );
  };

  const unlikePost = (accountId: number, postId: number) => {
    if (!Object.keys(posts).includes(postId.toString())) return;
    setAccounts(
      produce((draft) => {
        draft[accountId].liked.delete(postId);
      })
    );
  };

  const savePost = (accountId: number, postId: number) => {
    if (!Object.keys(posts).includes(postId.toString())) return;
    setAccounts(
      produce((draft) => {
        draft[accountId].saved.add(postId);
      })
    );
  };

  const unsavePost = (accountId: number, postId: number) => {
    if (!Object.keys(posts).includes(postId.toString())) return;
    setAccounts(
      produce((draft) => {
        draft[accountId].saved.delete(postId);
      })
    );
  };

  return (
    <SampleContext.Provider
      value={{
        accounts,
        posts,
        userAccountId,
        getAccount,
        addPost,
        getPost,
        deletePost,
        likePost,
        unlikePost,
        savePost,
        unsavePost,
        targetWidth,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
};

export default PostsProvider;
