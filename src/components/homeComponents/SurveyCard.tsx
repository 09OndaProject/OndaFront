'use client'
import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface SurveyCardProps {
    image: string | StaticImageData;
    link: string;
    title: string;
    description: string;
}

export default function SurveyCard({image, link, title, description} : SurveyCardProps) {
  return (
    <div onClick={() => window.open(link, '_blank')} className="max-w-[400px] rounded-md bg-primary-light h-full">
        <Image src={image} alt='survey thumbnail' className='w-full'/>
        <div className="flex flex-col gap-4 justify-center items-center p-6 text-center">
            <h3 className="font-medium text-sm md:text-md">{title}</h3>
            <p className="text-xs md:text-sm mb-4 text-gray-800">{description}</p>
        </div>
    </div>
  )
}
