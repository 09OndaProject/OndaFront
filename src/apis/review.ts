import axiosInstance from "./axiosInstance";

export const postReview = async (
  meetingId: number,
  data: { rating: number; content: string }
) => {
  const response = await axiosInstance.post(`/api/meetings/${meetingId}/reviews`, data);
  return response.data;
};
