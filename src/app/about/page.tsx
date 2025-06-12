import Image from "next/image";
import aboutImage from "@/assets/images/about_main.png";
import { CheckSquare, MessagesSquare, Search, Smile } from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <body className="relative flex flex-col">
      {/* 헤더 배경 */}
      <div className="md:bg-primary w-full h-[500px]" />

      {/* 대표 이미지 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-20 z-10 w-full max-w-[1024px] px-4">
        <Image
          src={aboutImage}
          alt="온다 소개 이미지"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* 본문 콘텐츠 */}
      <section className="relative z-20 pt-[100px] md:pt-[320px] flex flex-col items-center mx-6 md:mx-[160px] mb-40">
        {/* 로고 & 문구 */}
        <div className="flex flex-col justify-start w-full mb-10">
          <div className="flex gap-6 items-center w-full mb-20">
            <div className="relative w-20 h-20">
              <Image
                src="/assets/logo/logo.svg"
                alt="logo"
                fill
                className="object-contain"
                sizes="100%"
              />
            </div>
            <h2 className="text-xl font-semibold">
              공간, 경험, 지식 그리고 사람을 잇다
            </h2>
          </div>
          <p className="text-md leading-normal">
            온:다는 배우고 나누고, <br /> 연결되는 삶을 위해 존재합니다.
            <br />
            <br />
            65세 이상 2명 중 1명 (약 40%)이 &apos;사회적 고립감&apos;을 느끼고
            있으며
            <br />
            디지털 소외는 그 고립을 더 깊게 만듭니다.
            <br />
            <br />
            온:다는{" "}
            <span className="font-semibold">
              &quot;어떻게 하면 누구라도 손쉽게
              <br />
              IT기술을 통해 연결될 수 있을까?&quot;
            </span>
            라는 고민에서 시작하였습니다.
          </p>
        </div>
      </section>

      <section className="relative z-20 flex flex-col mx-6 md:mx-[160px] mb-20">
        <h2 className="text-primary text-xl font-semibold mb-10">
          배우고, 나누고, 연결되는 온:다 이용법
        </h2>

        <div className="flex gap-8 items-center my-4 text-md">
          <span className="text-lg w-20 text-center">하나,</span>
          <Search size={40} />
          <span className="max-w-[500px] leading-normal">
            관심사, 지역, 디지털 친숙도 등에 따라
            <br />
            <Link
              className="border-b hover:text-primary-deep hover:border-primary-light"
              href={"/meet/search"}
            >
              나에게 맞는 모임을 검색해요.
            </Link>
          </span>
        </div>

        <div className="flex gap-8 items-center my-4 text-md">
          <span className="text-lg w-20 text-center">둘,</span>
          <CheckSquare size={40} />
          <span className="max-w-[500px] leading-normal">
            모임 주제 & 소개글, 모임 날짜/시간,
            <br />
            장소를 확인하고 모임을 신청해요!
          </span>
        </div>

        <div className="flex gap-8 items-center my-4 text-md">
          <span className="text-lg w-20 text-center">셋,</span>
          <Smile size={40} />
          <span className="max-w-[500px] leading-normal">
            혼자보다 함께라서 더 쉽고 풍성한
            <br />
            배움 활동과 관심사 모임을 즐기세요.
          </span>
        </div>

        <div className="flex gap-8 items-center my-4 text-md">
          <span className="text-lg w-20 text-center font-semibold text-accent-main">
            꿀팁!
          </span>
          <MessagesSquare size={40} />
          <span className="max-w-[500px] leading-normal">
            참석할 모임이 확정되면, 곧 만나게 될 <br />
            <span className="text-accent-main font-semibold">모임 동료들과의 채팅을 시작</span>하세요.
          </span>
        </div>
      </section>

      <section className="relative z-20 flex flex-col mx-6 md:mx-[160px] mb-20">
        <h2 className="text-primary text-xl font-semibold mb-10">
          나도 리더가 될 수 있을까? 물론입니다!
        </h2>        
      </section>
      {/* 인용구 */}
      <section>
        <h2 className="text-xl font-semibold my-20 text-center">
          &#34;경험이 연결되고, <br className="lg:hidden block" />
          연결이 배움이 됩니다.&#34;
        </h2>
      </section>
    </body>
  );
}
