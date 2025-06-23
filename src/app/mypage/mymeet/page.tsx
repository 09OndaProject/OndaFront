'use client'

import { useLeaderMeetingsById } from "@/hooks/useLeader";
import LeaderMeetingCardList from "../_components/LeaderMeetingCardList";

const MyMeetingPage = () => {
  const { data: meetingData } = useLeaderMeetingsById(110);

  return (
    <main className="px-10 py-12 max-w-5xl mx-auto space-y-10">
      <LeaderMeetingCardList meetings={meetingData?.data || []} />
    </main>
  );
};

export default MyMeetingPage;
