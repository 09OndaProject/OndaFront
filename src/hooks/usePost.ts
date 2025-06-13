import { useQuery } from "@tanstack/react-query";
import { Post } from "@/types/post"
import { getPost, getPosts } from "@/apis/post";

export const useFetchPost = (id: number) => {
  return useQuery<Post>({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
    enabled: !!id,
  })
}

export const useFetchPostList = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn:getPosts,
  })
}