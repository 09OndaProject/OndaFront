import { Review } from '@/types/meetings';
import api from './app';
import { END_POINT } from '@/constants/route';

// 리뷰 목록 조회
export async function getReviewsByMeetId(meetId: number): Promise<Review[]> {
  const { data } = await api.get<Review[]>(END_POINT.REVIEWS(meetId));
  return data;
}

// 리뷰 작성
export async function createReview(meetId: number, payload: { content: string; rating: number }): Promise<Review> {
  const { data } = await api.post<Review>(END_POINT.REVIEWS(meetId), payload);
  return data;
}

// 리뷰 요약 조회
export async function getReviewSummary(meetId: number): Promise<Review> {
  const { data } = await api.get<Review>(END_POINT.REVIEWS_SUMMARY(meetId));
  return data;
}

// 리뷰 상세 조회
export async function getReviewDetail(reviewId: number): Promise<Review> {
  const { data } = await api.get<Review>(END_POINT.REVIEW_DETAIL(reviewId));
  return data;
}

// 리뷰 수정
export async function updateReview(reviewId: number, payload: { content?: string; rating?: number }): Promise<Review> {
  const { data } = await api.patch<Review>(END_POINT.REVIEW_DETAIL(reviewId), payload);
  return data;
}

// 리뷰 삭제
export async function deleteReview(reviewId: number): Promise<void> {
  await api.delete(END_POINT.REVIEW_DETAIL(reviewId));
}
