import { getComments, createComment } from "@/apis/comments";
import { Comment, CommentCreatePayload, CommentsResponse } from "@/types/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


// 댓글 목록 조회 
export const useFetchComments = (postId: number, page: number) => {
  return useQuery<CommentsResponse, Error>({
    queryKey: ["comments", postId, page],
    queryFn: () => getComments(postId, page),
    enabled: !!postId,
  });
}

// 댓글 작성
export const useCreateComment = () => {
    const queryClient = useQueryClient();

    return useMutation<Comment, Error, CommentCreatePayload>({
        mutationFn: createComment,
        onSuccess: (data) => {
            console.log("댓글 작성 성공", data);

            queryClient.invalidateQueries({ queryKey: ["comments", data.post] });
        },
        onError: (error) => {
            console.error("댓글 작성 실패: ", error.message);
        },
    });
}