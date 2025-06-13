import { dummyPosts } from "@/datas/dummyPosts";
import { SearchParams } from "@/stores/useAppSearchParams";
import { Post } from "@/types/post";
import { useMemo } from "react";

export function useFilteredPosts(searchParams: SearchParams) {
  const filtered = useMemo<Post[]>(() => {
    return dummyPosts
      .filter((post) => {
        const filteredCategory =
          !searchParams.category || post.category === searchParams.category;
        const filteredInterest =
          !searchParams.interest || post.interest === searchParams.interest;
        const filteredArea =
          !searchParams.area || post.area === searchParams.area;

        const filteredKeyword =
          !searchParams.keyword || post.title.includes(searchParams.keyword);

        return (
          filteredCategory &&
          filteredInterest &&
          filteredArea &&
          filteredKeyword
        );
      })
      .map((post) => ({
        ...post,
        file: post.file ?? undefined,
        created_at: new Date(post.created_at),
        updated_at: post.updated_at ? new Date(post.updated_at) : undefined,
      }));
  }, [searchParams]);

  return { posts: filtered };
}
