'use client';

import React, { useState } from 'react';
//import MeetForm from "./_components/MeetForm";
import MeetImageUploader from "./_components/MeetImageUploader";
import MeetFormFields from "./_components/MeetFormFields";
import api from "@/apis/app";
// import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function MeetCreatePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [method, setMethod] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [digitalLevel, setDigitalLevel] = useState('');
  const [deadline, setDeadline] = useState('');
  const [endTime, setEndTime] = useState('');
  const [meetCount, setMeetCount] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [areaInfo, setAreaInfo] = useState({
    selectedSido: '',
    selectedDistrict: '',
    area_id: -1,
  });

  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("제출 직전 areaInfo:", areaInfo);
    console.log("contact(method):", method);
    const payload = {
      title,
      description,
      area: areaInfo.area_id,
      digital_level: Number(digitalLevel),
      category: Number(category),
      date,
      start_time: time,
      end_time: endTime,
      location,
      contact: method,
      session_count: Number(meetCount),
      max_people: Number(maxPeople),
      file: 0, 
      application_deadline: new Date(deadline).toISOString(),
    };
    
    console.log("payload", payload);

    try {
      const token = localStorage.getItem("accessToken");
      console.log("토큰 확인:", token);
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }
  
      await api.post("/meets", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-CSRFToken": localStorage.getItem("csrfToken") || "",
        },
      });
  
      alert("모임 생성 성공!");
      router.push("/meet");
    } catch (error) {
      console.error("모임 생성 실패:", error);
      alert("모임 생성에 실패했습니다.");
    }
  };

 
  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-bold text-main mb-4">모임 생성</h1>

      <MeetImageUploader setImageUrl={setImageUrl} />
      <MeetFormFields
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        method={method}
        setMethod={setMethod}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        location={location}
        setLocation={setLocation}
        maxPeople={maxPeople}
        setMaxPeople={setMaxPeople}
        digitalLevel={digitalLevel}
        setDigitalLevel={setDigitalLevel}
        deadline={deadline}
        setDeadline={setDeadline}
        endTime={endTime}
        setEndTime={setEndTime}
        meetCount={meetCount}
        setMeetCount={setMeetCount}
        areaInfo={areaInfo}
        setAreaInfo={setAreaInfo}
      />
    </form>
  );
}
