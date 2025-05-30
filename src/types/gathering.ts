export type Gathering = {
  id: number;
  leaderId: number;
  title: string;
  description: string;
  areaId: number;
  location: string;
  digitalLevel: number;
  interestId: number;
  date: Date;
  time: TimeRanges;
  contact: string;
  maxPeople: number;
  currentPeople: number;
  status: "모집중" | "마감" | "완료";
  image?: string;
  deadlineDate: Date;
};
