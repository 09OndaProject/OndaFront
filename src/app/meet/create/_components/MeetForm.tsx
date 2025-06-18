"use client";

import React, { useState } from "react";
import MeetFormFields from "./MeetFormFields";
import MeetImageUploader from "./MeetImageUploader";
//import Button from "@/components/common/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import api from "@/apis/app";

export default function MeetForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState(""); 
  const [date, setDate] = useState("");
  const [method, setMethod] = useState(""); 
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [digitalLevel, setDigitalLevel] = useState("");
  const [deadline, setDeadline] = useState("");
  const [meetCount, setMeetCount] = useState(""); 
  const [endTime, setEndTime] = useState(""); 

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
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
      );
      console.log("모임 생성 성공:", response.data);
      alert("모임이 성공적으로 생성되었습니다!");

      router.push("/meet");
    }catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("모임 생성 실패:", error.response?.data || error.message);
      } else {
        console.error("알 수 없는 에러:", error);
      }
    
      alert("모임 생성에 실패했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-6">
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
