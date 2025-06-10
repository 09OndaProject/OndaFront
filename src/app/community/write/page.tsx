import React from 'react'
import PostForm from './_components/PostForm'

export default function page() {
  return (
    <div className="flex flex-col items-center w-full my-20 max-w-[1440px] px-4 md:px-[160px] mx-auto">
      <div className="w-full flex justify-between">
        <h1 className="text-xl font-bold text-left w-full">글 쓰기</h1>
      </div>
      <PostForm/>
    </div>
  )
}
