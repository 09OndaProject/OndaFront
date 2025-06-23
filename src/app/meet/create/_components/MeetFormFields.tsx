import React, { useEffect, useState } from 'react';
import TextInput from '@/components/common/TextInput';
import Textarea from '@/components/common/Textarea';
import SelectBox from '@/components/common/SelectBox';
import ToggleButtonGroup from '@/components/common/ToggleButtonGroup';
import AreaSelector from '@/components/common/AreaSelector';
import { getAreaOptions } from '@/apis/options';
import Button from '@/components/common/Button';

interface MeetFormData {
  title: string;
  description: string;
  category: string;
  method: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  maxPeople: string;
  digitalLevel: string;
  deadline: string;
  meetCount: string;
}

interface MeetFormFieldsProps {
  formData: MeetFormData;
  setFormData: React.Dispatch<React.SetStateAction<MeetFormData>>;
  areaInfo: {
    selectedSido: string;
    selectedDistrict: string;
    area_id: number;
  };
  setAreaInfo: React.Dispatch<
    React.SetStateAction<{
      selectedSido: string;
      selectedDistrict: string;
      area_id: number;
    }>
  >;
}

export default function MeetFormFields({ formData, setFormData, areaInfo, setAreaInfo }: MeetFormFieldsProps) {
  interface AreaOption {
    area_name: string;
    children: { id: number; area_name: string }[];
  }
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [areaOptions, setAreaOptions] = useState<AreaOption[]>([]);

  useEffect(() => {
    const fetchAreas = async () => {
      const data = await getAreaOptions();
      setAreaOptions(data);
    };
    fetchAreas();
  }, []);

  const handleFormChange = (field: keyof MeetFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="개설할 모임 이름"
          value={formData?.title}
          onChange={(e) => handleFormChange('title', e.target.value)}
          placeholder="모임 제목을 입력해주세요"
          required
        />

        <SelectBox
          label="카테고리"
          placeholder="카테고리"
          value={formData?.category}
          onChange={(e) => handleFormChange('category', e.target.value)}
          options={[
            { label: '디지털 기초', value: '디지털 기초' },
            { label: '디지털 심화', value: '디지털 심화' },
            { label: '커뮤니케이션', value: '커뮤니케이션' },
          ]}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="일정"
          type="date"
          value={formData?.date}
          onChange={(e) => handleFormChange('date', e.target.value)}
          required
        />
        <TextInput
          label="모집 마감일"
          type="date"
          value={formData?.deadline}
          onChange={(e) => handleFormChange('deadline', e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="시작 시간"
          type="time"
          value={formData?.time}
          onChange={(e) => handleFormChange('time', e.target.value)}
          required
        />
        <TextInput
          label="종료 시간"
          type="time"
          value={formData?.endTime}
          onChange={(e) => handleFormChange('endTime', e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="모집 인원(최대)"
          type="number"
          value={formData?.maxPeople}
          onChange={(e) => handleFormChange('maxPeople', e.target.value)}
          placeholder="숫자만 입력"
          required
        />
        <TextInput
          label="횟수(최대4회)"
          type="number"
          value={formData?.meetCount}
          onChange={(e) => handleFormChange('meetCount', e.target.value)}
          required
        />
      </div>
      <ToggleButtonGroup
        label="방법"
        value={formData?.method}
        onChange={(value) => handleFormChange('method', value)}
        options={[
          { label: '온라인', value: '온라인' },
          { label: '오프라인', value: '오프라인' },
          { label: '온/오프라인', value: '온/오프라인' },
        ]}
      />
      <SelectBox
        placeholder="디지털 난이도"
        value={formData?.digitalLevel}
        onChange={(e) => handleFormChange('digitalLevel', e.target.value)}
        options={[
          { label: '상 (Zoom 사용)', value: '상' },
          { label: '중 (앱 사용)', value: '중' },
          { label: '하 (전화만 가능)', value: '하' },
        ]}
      />
      <div className="relative w-full text-sm">
        <label className="text-sm font-medium text-gray-700 mb-1 block">지역</label>
        <button
          type="button"
          className="w-full border px-4 py-2 rounded flex justify-between items-center"
          onClick={() => setIsAreaOpen((prev) => !prev)}
        >
          {areaInfo.selectedSido && areaInfo.selectedDistrict
            ? `${areaInfo.selectedSido} ${areaInfo.selectedDistrict}`
            : '지역 선택'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isAreaOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white rounded shadow">
            <AreaSelector areaOptions={areaOptions} areaInfo={areaInfo} setAreaInfo={setAreaInfo} />
          </div>
        )}
      </div>
      <TextInput
        label="상세 모임 위치(주소) 및 장소"
        value={formData?.location}
        onChange={(e) => handleFormChange('location', e.target.value)}
        placeholder="예: 서울 강남구"
        required
      />
      <Textarea
        label="모임 소개"
        value={formData?.description}
        onChange={(e) => handleFormChange('description', e.target.value)}
        placeholder="모임을 소개해주세요"
        required
      />
      <div className="text-center pt-4">
        <Button type="submit" width="w-full" height="h-[44px]">
          모임 생성하기
        </Button>
      </div>
    </div>
  );
}
