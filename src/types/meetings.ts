import { FileData } from "./file";

export interface MeetingCardProps {
  item: {
    meet_id: number;
    title: string;
    interest: number;
    date: string;
    time: string;
    location: string;
    image?: string;
    status: string;
    contact?: string;
  };
  isApplied?: boolean; // 신청한 모임인지 여부
  context?: 'applied' | 'past';
}

export type Meeting = {
  id: number;
  title: string;
  description: string;
  area: string;
  date: string;
  file: FileData;
  max_people: number;
  current_people: number;
  application_deadline: string;
  status: string;
  sesstion_count: number;
  meet_rating: number;
}

export type Review = {
  id: number;
  nickname: string;
  rating: number;
  content: string;
  created_at: string;
  meet_title: string;
  meet_date: string;
  meet_location: string;
}

export type ReviewResponse = {
  average_rating: number;
  reviews: Review[];
};

export interface MeetFormData {
  title: string;
  description: string;
  digital_level: string | number;
  category: string | number;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  contact: string;
  session_count: number | null;
  max_people: number | null;
  file: number;
  application_deadline: string;
  link: string;
}

export type digitalLevelOption = {
  id: number;
  level: number;
  description: string;
  display: string;
};
export type categoryOption = {
  id: number;
  category_name: string;
};
export type interestOption = {
  id: number;
  interest_name: string;
};
