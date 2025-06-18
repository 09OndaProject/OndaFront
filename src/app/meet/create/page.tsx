"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MeetImageUploader from "./_components/MeetImageUploader";
import MeetFormFields from "./_components/MeetFormFields";
import api from "@/apis/app";
import { AxiosError } from "axios";

export default function MeetCreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); 
  const [method, setMethod] = useState(""); 
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [digitalLevel, setDigitalLevel] = useState("");
  const [deadline, setDeadline] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetCount, setMeetCount] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const response = await api.post(
        "/api/meets",
        {
          title,
          description,
          area: Number(category),
          digital_level: Number(digitalLevel),
          interest: Number(method),
          date,
          time,
          location,
          max_people: Number(maxPeople),
          application_deadline: deadline,
          image: imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("모임 생성 성공:", response.data);
      alert("모임이 성공적으로 생성되었습니다!");
      router.push("/meet"); 
    } catch (error: unknown) {
      const err = error as AxiosError<{ detail?: string }>;
    
      console.error("모임 생성 실패:", err.response?.data?.detail || err.message);
      alert(err.response?.data?.detail || "모임 생성에 실패했습니다.");
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
      />
    </form>
  );
}
