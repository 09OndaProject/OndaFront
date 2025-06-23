'use client';

import { useRouter } from 'next/navigation';
import ApplicantTable from './_components/ApplicantTable';
import LeaderProfile from './_components/LeaderProfile';
import LeaderDetail from './_components/LeaderDetail';
import { useAuthStore } from '@/stores/useAuth';
import { useMyLeaderApplication } from '@/hooks/useLeader';

const LeaderPage = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  const {
    data: myLeader,
    isLoading,
    isError,
  } = useMyLeaderApplication();

  // 로그인 안 한 경우
  if (!user) {
    alert("리더신청은 로그인 후 이용하실 수 있습니다.")
    router.replace('/login');
    return null;
  }

  // 일반 유저는 작성 페이지로 리다이렉트
  if (user.role === 'user') {
    router.replace('/leader/write');
    return null;
  }

  // 로딩 중
  if (user.role === 'leader' && isLoading) {
    return <p>로딩 중...</p>;
  }

  // 리더인데 신청 정보가 없음 → 작성하러
  if (user.role === 'leader' && (isError || !myLeader)) {
    router.replace('/leader/write');
    return null;
  }

  // 리더 상세정보 표시
  if (user.role === 'leader' && myLeader) {
    return (
      <main className="px-10 py-12 max-w-5xl mx-auto space-y-10">
        <h2 className="text-lg font-semibold">나의 리더 신청 정보</h2>
        <LeaderProfile leader={myLeader} currentStatus={myLeader.status} setCurrentStatus={() => {}} />
        <LeaderDetail leader={myLeader} />
      </main>
    );
  }

  // 관리자 화면
  if (user.role === 'admin') {
    return (
      <main className="px-10 py-12 max-w-5xl mx-auto space-y-10">
        <ApplicantTable />
      </main>
    );
  }

  return null;
};

export default LeaderPage;
