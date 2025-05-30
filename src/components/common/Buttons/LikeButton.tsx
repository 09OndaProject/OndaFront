import { IconButtonProps } from '@/types/common'
import { Heart } from 'lucide-react'
import React from 'react'

export default function LikeButton({onClick, size=24, className} : IconButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      <Heart size={size}/>
    </button >
  )
}
