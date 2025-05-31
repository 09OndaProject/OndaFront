import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[110px] flex items-center justify-between px-12">
      {/* 로고 부분*/}
      <div className="flex items-center">
        <Link href="/">
          <Image src="assets/logo/logo.svg" alt="onda" width={43} height={38} />
        </Link>
      </div>

      {/* 중앙 */}
      <nav className="flex gap-10 text-black font-medium text-base">
        <Link href={"/"}>홈으로</Link>
        <Link href={"#"}>모임찾기</Link>
        <Link href={"#"}>리더신청</Link>
        <Link href={"#"}>소통하기</Link>
        <Link href={"#"}>온:다 소개</Link>
      </nav>

      {/* 우측 */}
      <div className="flex gap-6 text-black font-medium text-base">
        <Link href={"#"}>로그인</Link>
        <Link href={"/signup"}>회원가입</Link>
      </div>
    </div>
  );
}
