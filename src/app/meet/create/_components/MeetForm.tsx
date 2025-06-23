'use client';

import React, { useState } from 'react';
import MeetFormFields from './MeetFormFields';
import MeetImageUploader from './MeetImageUploader';

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

export default function MeetForm() {
  const [formData, setFormData] = useState<MeetFormData>({
    title: '',
    description: '',
    category: '',
    method: '',
    date: '',
    time: '',
    endTime: '',
    location: '',
    maxPeople: '',
    digitalLevel: '',
    deadline: '',
    meetCount: '',
  });

  const [areaInfo, setAreaInfo] = useState({
    selectedSido: '',
    selectedDistrict: '',
    area_id: -1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      area_id: areaInfo.area_id,
    };

    console.log('폼 제출됨:', submitData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-6">
      <MeetImageUploader setImageUrl={() => {}} />
      <MeetFormFields formData={formData} setFormData={setFormData} areaInfo={areaInfo} setAreaInfo={setAreaInfo} />
    </form>
  );
}
