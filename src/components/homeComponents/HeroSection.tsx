import React from "react";
import heroImage from "@/assets/images/hero.png";
import Image from "next/image";
import Button from "../common/Button";

export default function HeroSection() {
  return (
    <>
      <div className="flex items-center flex-col h-[670px]">
        <div className="flex items-center justify-center text-center gap-40 w-full h-[500px] bg-gradient-to-t from-[#FDE8E0] to-transparent">
          {/* 왼쪽 텍스트 + 버튼 영역 */}
          <div className="flex flex-col gap-4 text-center items-center">
            <div className="mb-5 sm:mb-20 z-10">
              <div>
                <h1 className="text-2xl font-bold py-10">
                  공간, 경험, 지식 <br />
                  그리고 사람을 잇다
                </h1>
              </div>
              <div className="flex gap-4">
                <Button>시작하기</Button>
                <Button color="gray" variant="outline" >
                  리더 신청
                </Button>
              </div>
            </div>
            <div className="absolute bottom-[100px] w-[800px] h-[400px] bg-[#FFDEAD] rounded-t-full z-0 hidden md:block" />
          </div>
          {/* 오른쪽 이미지 영역 */}
          <div className="hidden xl:block bg-transparent z-30">
            <Image
              className="max-w-[650px] relative bottom-[-30px]"
              src={heroImage.src}
              alt="hero"
              width={450}
              height={650}
            />
          </div>
        </div>
        <div className="h-[100px] w-full bg-white z-20"></div>
      </div>
    </>
  );
}
