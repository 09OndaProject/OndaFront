import { SearchParams } from "@/stores/useAppSearchParams";
import { Post } from "@/types/post";
import { useMemo } from "react";
import { useFetchPostList } from "./usePost";

export function useFilteredPosts(searchParams: SearchParams) {
  const { data: posts = [], isLoading } = useFetchPostList();

  const filtered = useMemo<Post[]>(() => {
    return posts.filter((post) => {
      const filteredCategory =
        !searchParams.category || post.category === searchParams.category;
      const filteredInterest =
        !searchParams.interest || post.interest === searchParams.interest;
      const filteredArea =
        !searchParams.area || post.area === searchParams.area;

      const filteredKeyword =
        !searchParams.keyword || post.title.includes(searchParams.keyword);

      return (
        filteredCategory && filteredInterest && filteredArea && filteredKeyword
      );
    });
  }, [posts, searchParams]);

  return { posts: filtered, isLoading };
}
