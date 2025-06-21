//유저 정보 타입
export type User = {
    id: string;
    email: string;
    phone: string;
    nickname: string;
    name: string;
    birth: Date; //생년월일
    imageUrl?: string; //프로필이미지
    ageGroup: string; //연령대
    area: string; //지역
    digitalLevel: string; //디지털레벨
    interest: string[]; //관심사
    isLeader: boolean;
    isAdmin: boolean;
};

export type SUser = {
    id: number;
    email: string;
    nickname: string;
    name: string;
    file: string | null;
    date_of_birth: string;
    area: { id: number; name: string };
    interest: { id: number; name: string };
    digital_level: { id: number; level: number; description: string };      
}

export type SLeader =  {
    id: string;
    user_email: string;
    user_name: string;
    status: ApplicationStatus;
    created_at: Date;
}

export type Leader =  {
    id: string;
    email: string;
    name: string;
    status: ApplicationStatus;
    createdAt: Date;
}

export function transformSLeaderToLeader(s: SLeader): Leader {
    return {
      id: s.id,
      email: s.user_email,
      name: s.user_name,
      status: s.status,
      createdAt: s.created_at
    };
  }

export type LeaderApplication = {
    id?: string;
    bio: string;
    status: ApplicationStatus;
    certificates: Certification[];
}

export type Certification = {
    certificate_type: string;
    file: string;
}

export type ApplicationStatus = 'pending' | 'approved' | 'rejected';