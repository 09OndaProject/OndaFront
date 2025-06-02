import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/images/about_main.png";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center md:mx-[160px] mx-10 leading-relaxed mb-40">
      <div className="max-w-[1024px] mb-20">
        <Image src={aboutImage} alt="" sizes="100%" />
      </div>
      <div className="flex gap-8 items-end justify-start w-full mb-10">
        <div className="relative w-20 h-20">
          <Image
            src="/assets/logo/logo.svg"
            alt="logo"
            fill
            className="object-fill"
            sizes="100%"
          />
        </div>
        <h3 className="text-lg font-semibold">
          공간, 경험, 지식 그리고 사람을 잇다
        </h3>
      </div>

      <div className="w-full mb-12 text-sm font-medium">
        <h4 className="text-md font-semibold my-6 text-accent-main">
        누구나 쉽게 사용할 수 있습니다.</h4>
        <p>
          온:다는 배우고, 나누고 연결되는 삶을 위해 존재합니다.
          <br />
          65세 이상 시니어층의 40% 이상이 &#39;사회적 고립감&#39;을 느끼고
          있으며 디지털 소외는 그 고립을 더 깊게 만듭니다.
          <br />
          온다는 &#34;시니어층이 IT기술을 통해 어떻게 연결될 수 있을까?&#34;
          라는 고민에서 시작하였습니다.
        </p>
        <p>누구나 쉽게 사용할 수 있습니다</p>
      </div>
            <div className="w-full mb-12 text-sm font-medium">
        <h4 className="text-md font-semibold my-6 text-accent-main">
        누구나 쉽게 사용할 수 있습니다.</h4>
        <p>
          온:다는 배우고, 나누고 연결되는 삶을 위해 존재합니다.
          <br />
          65세 이상 시니어층의 40% 이상이 &#39;사회적 고립감&#39;을 느끼고
          있으며 디지털 소외는 그 고립을 더 깊게 만듭니다.
          <br />
          온다는 &#34;시니어층이 IT기술을 통해 어떻게 연결될 수 있을까?&#34;
          라는 고민에서 시작하였습니다.
        </p>
        <p>누구나 쉽게 사용할 수 있습니다</p>
      </div>
            <div className="w-full mb-12 text-sm font-medium">
        <h4 className="text-md font-semibold my-6 text-accent-main">
        누구나 쉽게 사용할 수 있습니다.</h4>
        <p>
          온:다는 배우고, 나누고 연결되는 삶을 위해 존재합니다.
          <br />
          65세 이상 시니어층의 40% 이상이 &#39;사회적 고립감&#39;을 느끼고
          있으며 디지털 소외는 그 고립을 더 깊게 만듭니다.
          <br />
          온다는 &#34;시니어층이 IT기술을 통해 어떻게 연결될 수 있을까?&#34;
          라는 고민에서 시작하였습니다.
        </p>
        <p>누구나 쉽게 사용할 수 있습니다</p>
      </div>
    </div>
  );
}
