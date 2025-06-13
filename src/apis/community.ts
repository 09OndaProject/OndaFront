import { END_POINT } from "@/constants/route";
import api from "./app";

export interface PostCreatePayload {
    title: string;
    content: string;
    category: number;
    area?: number;
    interest?: number;
    file?: number
}

export interface PostCreateResponse {
    id: number;
    title: string;
    content: string;
    category: number;
    area?: number;
    interest?: number;
    file?: number;
    created_at: Date;
    updated_at?: Date;
    nickname: string;
    is_mine: boolean;
}

export const postCreate = async(payload: PostCreatePayload): Promise<PostCreateResponse> => {
    const response = await api.post<PostCreateResponse>(END_POINT.POSTS, payload);
    console.log("게시글 업로드", response)

    return response.data;
}