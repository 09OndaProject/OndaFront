"use client";
import { useSignupStore } from "@/stores/useSignUpStore";
import TextInput from "@/components/common/TextInput";
import AreaSelector from "@/components/common/AreaSelector";
import InterestSelector from "@/components/InterestSelector";
import DigitalLevelSelector from "@/components/DigitalLevelSelector";
import { useSignupSubmit } from "@/hooks/useSignupSubmit";

export default function SignupPage() {
  const { handleSubmit, setValue } = useSignupSubmit();
  const {
    email,
    password,
    password_confirm,
    nickname,
    name,
    phone,
    birthYear,
    birthMonth,
    birthDay,
    agreement,
    toggleAgreement,
  } = useSignupStore();

  return (
    <main className="w-full max-w-[1280px] px-16 py-12 mx-auto">
      <h1 className="text-xl font-bold mb-10">회원가입</h1>

      <div className="w-full flex justify-center mt-20">
        <form
          id="signupForm"
          onSubmit={handleSubmit}
          className="space-y-6 w-full max-w-md"
        >
          <div>
            <label className="text-xs font-bold text-gray-700">이름</label>
            <div className="mt-3">
              <TextInput
                placeholder="이름"
                name="name"
                value={name}
                onChange={(e) => setValue("name", e.target.value)}
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-700">닉네임</label>
            <div className="mt-3">
              <TextInput
                placeholder="닉네임"
                name="nickname"
                value={nickname}
                onChange={(e) => setValue("nickname", e.target.value)}
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="birthYear"
              className="text-xs font-bold text-gray-700"
            >
              생년월일
            </label>
            <div className="mt-3 flex gap-2 items-center">
              <TextInput
                name="birthYear"
                value={birthYear}
                onChange={(e) => setValue("birthYear", e.target.value)}
                placeholder="YYYY"
                type="number"
                required
              />
              <span className=" text-gray-400">/</span>
              <TextInput
                name="birthMonth"
                value={birthMonth}
                onChange={(e) => setValue("birthMonth", e.target.value)}
                placeholder="MM"
                type="number"
                required
              />
              <span className="text-gray-400">/</span>
              <TextInput
                name="birthDay"
                value={birthDay}
                onChange={(e) => setValue("birthDay", e.target.value)}
                placeholder="DD"
                type="number"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700">이메일</label>
            <div className="mt-3">
              <TextInput
                placeholder="이메일"
                name="email"
                value={email}
                onChange={(e) => setValue("email", e.target.value)}
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-700">비밀번호</label>
            <div className="mt-3">
              <TextInput
                placeholder="비밀번호"
                name="password"
                value={password}
                onChange={(e) => setValue("password", e.target.value)}
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="birthYear"
              className="text-xs font-bold text-gray-700"
            >
              비밀번호 확인
            </label>
            <div className="mt-3">
              <TextInput
                placeholder="비밀번호 확인"
                name="password_confirm"
                value={password_confirm}
                onChange={(e) => setValue("password_confirm", e.target.value)}
                required
                type="password"
              />
            </div>
          </div>

          {/* <div className="-mx-16 border-t border-gray-500 my-12" /> */}
          <div>
            <label className="text-xs font-bold text-gray-700">전화번호</label>
            <div className="mt-3">
              <TextInput
                placeholder="전화번호"
                name="phone"
                value={phone}
                onChange={(e) => setValue("phone", e.target.value)}
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-700">지역</label>
            <div className="mt-3">
              <AreaSelector />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700">
              관심사(중복가능)
            </label>
            <div className="mt-3">
              <InterestSelector />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700">
              디지털 친숙도
            </label>
            <div className="mt-3">
              <DigitalLevelSelector />
            </div>
          </div>
          {/* 약관 동의 & 완료 버튼 */}
          <div className="mt-12 border-t border-gray-300 pt-8 space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agreement}
                onChange={toggleAgreement}
                className="accent-orange-600 w-4 h-4"
                id="agreement"
              />
              <label
                htmlFor="agreement"
                className="leading-snug break-words text-gray-700"
              >
                [필수] ‘개인정보 수집 및 이용’, ‘서비스 이용 약관’ 등에 모두
                동의합니다.
              </label>
            </div>

            <button
              type="submit"
              form="signupForm"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded"
            >
              완료하기
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
