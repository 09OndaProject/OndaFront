"use client";

import React, { useState } from "react";
import MeetFormFields from "./MeetFormFields";
import MeetImageUploader from "./MeetImageUploader";
import { useRouter } from "next/navigation";

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

  const [areaInfo, setAreaInfo] = useState({
    selectedSido: "",
    selectedDistrict: "",
    area_id: -1,
  });

  
  const handleAreaInfoChange: React.Dispatch<
    React.SetStateAction<typeof areaInfo>
  > = (infoOrUpdater) => {
    const newInfo =
      typeof infoOrUpdater === "function"
        ? infoOrUpdater(areaInfo)
        : infoOrUpdater;

    setAreaInfo(newInfo);
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      date,
      time,
      location,
      maxPeople,
      digitalLevel,
      deadline,
      meetCount,
      area_id: areaInfo.area_id,
    };

    console.log("폼 제출됨:", formData);
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
        areaInfo={areaInfo}
        setAreaInfo={handleAreaInfoChange} 
      />
    </form>
  );
}
