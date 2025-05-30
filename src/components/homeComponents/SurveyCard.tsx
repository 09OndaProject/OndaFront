'use client'
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

interface SurveyCardProps {
    image: string | StaticImageData;
    link: string;
    title: string;
    description: string;
}

export default function SurveyCard({image, link, title, description} : SurveyCardProps) {
    const router = useRouter();
  return (
    <div onClick={() => router.push(link)} className="max-w-[310px] rounded-md bg-primary-light h-full">
        <Image src={image} alt='survey thumbnail'/>
        <div className="flex flex-col gap-4 justify-center items-center p-4 text-center">
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
        </div>
    </div>
  )
}
