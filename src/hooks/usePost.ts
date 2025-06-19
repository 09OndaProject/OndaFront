import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Post } from "@/types/post";
import {
  getPost,
  getPosts,
  postCreate,
  PostCreatePayload,
  PostCreateResponse,
  PostsResponse,
} from "@/apis/post";

export const useFetchPost = (id: number) => {
  return useQuery<Post>({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
    enabled: !!id,
  });
};

export const useFetchPostList = (page: number) => {
  return useQuery<PostsResponse>({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page),
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation<PostCreateResponse, Error, PostCreatePayload>({
    mutationFn: postCreate,
    onSuccess: (data) => {
      console.log("게시글 생성 성공", data);

      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error("게시글 생성 실패: ", error.message);
    },
  });
};
