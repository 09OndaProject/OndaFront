import SelectBox from '@/components/common/SelectBox'
import TextInput from '@/components/common/TextInput'
import { categoryOptions, digitalLevelOptions, interestOptions } from '@/constants/category';
import { Search } from 'lucide-react'
import React, { useState } from 'react'

export default function PostSearch() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState(0);
  const [selectedArea, setSelectedArea] = useState(0);
  const [selectedDigitalLevel, setSelectedDigitalLevel] = useState(0);


  return (
    <div className='w-full flex flex-wrap gap-4'>
      <TextInput placeholder="제목으로 게시글을 검새해보세요." icon={<Search size={24} />} className="w-full rounded-full h-12 text-center" ></TextInput>
      <SelectBox value={selectedCategory} options={categoryOptions} onChange={(e) => setSelectedCategory(Number(e.target.value))}/>
      <SelectBox value={selectedInterest} options={interestOptions} onChange={(e) => setSelectedInterest(Number(e.target.value))}/>
      <SelectBox value={selectedArea} options={interestOptions} onChange={(e) => setSelectedArea(Number(e.target.value))}/>
      <SelectBox value={selectedDigitalLevel} options={digitalLevelOptions} onChange={(e) => setSelectedDigitalLevel(Number(e.target.value))}/>
    </div>
  )
}