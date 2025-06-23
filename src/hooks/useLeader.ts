import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ApplicationStatus, Leader, LeaderApplicationDetail, LeaderApplicationRequest } from '@/types/leader';
import { createLeader, deleteLeader, getLeaderApplicants, getLeaderById, getLeaderMeetingById, getMyLeaderApplication, getReviewsByMeetingIds, updateLeaderStatus } from '@/apis/leader';

type LeaderApplicantResponse = {
    data: Leader[];
    totalCount: number;
};

export function useLeaderApplicants(page: number, size: number) {
  return useQuery<LeaderApplicantResponse>({
    queryKey: ['leaderApplicants', page, size],
    queryFn: () => getLeaderApplicants(page, size),
  });
}

// 리더 신청 상세 조회
export function useLeaderDetail(id: number) {
  return useQuery<LeaderApplicationDetail>({
      queryKey: ['leader', id],
      queryFn: () => getLeaderById(id),
      enabled: !!id,
  });
}

// 리더 신청
export function useCreateLeader() {
  const queryClient = useQueryClient();

  return useMutation({
      mutationFn: (payload: LeaderApplicationRequest) => createLeader(payload),
      onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaders'] });
      },
  });
}

// 리더 상태 업데이트
export function useUpdateLeaderStatus(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
      mutationFn: (status: ApplicationStatus) => updateLeaderStatus(id, status),
      onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaders'] });
      queryClient.invalidateQueries({ queryKey: ['leader', id] });
      },
  });
}

// 리더 삭제
export function useDeleteLeader() {
  const queryClient = useQueryClient();

  return useMutation({
      mutationFn: (id: number) => deleteLeader(id),
      onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaders'] });
      },
  });
}

//나의 리더 신청 상세 조회
export function useMyLeaderApplication() {
    return useQuery<LeaderApplicationDetail>({
      queryKey: ['myLeader'],
      queryFn: getMyLeaderApplication,
    });
}

// 리더기준 나의 모임 조회
export function useLeaderMeetingsById(id?: number, size: number = 10, page?: number) {
  return useQuery({
    queryKey: ['leaderMeetings', id, page, size],
    queryFn: () => getLeaderMeetingById(id!, size, page),
    enabled: typeof id === 'number',
  });
}


export function useReviewsByMeetingIds(meetingIds: number[]) {
    return useQuery({
      queryKey: ['reviews', ...meetingIds],
      queryFn: () => getReviewsByMeetingIds(meetingIds),
      enabled: meetingIds.length > 0,
    });
  }