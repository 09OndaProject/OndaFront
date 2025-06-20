'use client';

import MoreLinkButton from '@/components/common/Buttons/MoreLinkButton';
import StarRating from '@/components/StarRating';
import { Heart, User } from 'lucide-react';

export type MeetingStatus = '모집중' | '완료';

export type LeaderMeetingCardProps = {
  status: MeetingStatus;
  deadline: string;
  title: string;
  date: string;
  location: string;
  count: number;
  likes: number;
  applicants: number;
  averageRating?: number; // 완료 시 표시
};

const LeaderMeetingCard = ({
  status,
  deadline,
  title,
  date,
  location,
  count,
  likes,
  applicants,
  averageRating,
}: LeaderMeetingCardProps) => {
  const isDone = status === '완료';

  return (
    <div className="rounded-xl border bg-white space-y-3 p-5 shadow-sm text-xs w-full">
      <div className='flex justify-between items-center'>
        <div className="space-y-3">
          {/* 상태 + 마감일 + 상세보기 */}
          <div className="flex justify-between items-center">
            <div className="space-x-2">
              <span className={`font-semibold ${isDone ? 'text-gray-500' : 'text-accent-main'}`}>
                {status}
              </span>
              <span className="text-base text-gray-600"><span className='font-medium'>마감</span> {deadline}</span>
            </div>
          </div>

          {/* 제목 */}
          <div className="text-sm font-semibold">{title}</div>

          {/* 일정/장소/횟수 */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600 text-base">
            <div><span className='font-medium text-gray-700'>활동 일시</span> {date}</div>
            <div><span className='font-medium text-gray-700'>장소</span> {location}</div>
            <div><span className='font-medium text-gray-700'>모임 횟수</span> {count}회</div>
          </div>
        </div>
        <MoreLinkButton onClick={() => console.log('상세보기')}>상세 보기</MoreLinkButton>
      </div>

      {/* 하단 영역: 상태에 따라 다름 */}
      <div className="flex justify-between items-center rounded-md p-3 text-xs bg-orange-50">
        {isDone ? (
          // 완료 시: 평균 별점
          <div className="flex items-center text-accent-main gap-2">
            <span className="text-xs font-medium">평균 별점</span>
            <div className="flex items-center text-accent-main gap-1">
              <StarRating rating={averageRating ?? 0} size={20} />
              <span className="ml-1 text-gray-700 font-medium">{averageRating?.toFixed(1) ?? '-'}</span>
            </div>
          </div>
        ) : (
          // 모집중: 찜 + 신청 인원
          <div className="flex gap-4 items-center text-accent-main font-medium text-xs">
            <div className="flex items-center gap-1">
              <Heart size={20} fill="currentColor" />
              <span className='text-black text-xs'>{likes}명</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={20} fill="currentColor" />
              <span className='text-black text-xs'>신청 인원 {applicants}명</span>
            </div>
          </div>
        )}

        {/* 우측 버튼 */}
        <MoreLinkButton href={isDone ? '/review' : '/applicants'}>
          {isDone ? '참여자 후기 보기' : '신청자 정보 보기'}
        </MoreLinkButton>
      </div>
    </div>
  );
};

export default LeaderMeetingCard;
