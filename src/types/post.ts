export type Post = {
  post_id: number;
  title: string;
  content: string;
  category_id: number | null;
  digitalLevel_id: number | null;
  nickname: string;
  area_id?: number | null;
  interest_id: number | null;
  image_url?: string;
  created_at: Date;
  updated_at?: Date;
  is_author: boolean;
  //   likes: number;
  //   is_liked: boolean;
};

export type PostHeaderProps = {
  post_id: number;
  nickname: string;
  created_at: Date;
  category_id: number | null;
  interest_id: number | null;
  area_id: number | null;
  digitalLevel_id: number | null;
  is_author: boolean;
  title: string;
};

export type PostMetaDataProps = {
  post_id: number;
  category_id: number | null;
  interest_id: number | null;
  area_id: number | null;
  digitalLevel_id: number | null;
  is_author: boolean;
};

export type Comment = {
  post_id: number;
  comment_id: number;
  nickname: string;
  content: string;
  created_at: Date;
  updated_at?: Date;
  is_author: boolean;
};
