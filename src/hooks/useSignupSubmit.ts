"use client";
import { useSignupStore } from "@/stores/useSignUpStore";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuth";
import api from "@/apis/app";
import { END_POINT } from "@/constants/route";

export function useSignupSubmit() {
  const router = useRouter();
  const {
    area_id,
    email,
    password,
    password_confirm,
    name,
    phone,
    nickname,
    birthYear,
    birthMonth,
    birthDay,
    setValue,
    agreement,
    resetForm,
    isKakaoUser,
    interest_id,
    digitalLevel_id,
  } = useSignupStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      { key: "name", value: name },
      { key: "birthYear", value: birthYear },
      { key: "birthMonth", value: birthMonth },
      { key: "birthDay", value: birthDay },
      { key: "email", value: email },
      { key: "password", value: password },
      { key: "password_confirm", value: password_confirm },
      { key: "phone", value: phone },
    ];

    const firstEmpty = requiredFields.find((field) => !field.value?.trim());

    if (firstEmpty) {
      const target = document.querySelector(
        `input[name="${firstEmpty.key}"]`
      ) as HTMLElement;
      alert("모든 필드를 입력해주세요.");
      target?.focus();
      return;
    }

    if (password !== password_confirm) {
      alert("비밀번호가 일치하지 않습니다.");
      const passwordConfirmInput = document.querySelector(
        `input[name="password_confirm"]`
      ) as HTMLElement;
      passwordConfirmInput?.focus();
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("비밀번호는 영문+숫자 조합의 8자 이상이어야 합니다.");
      const passwordInput = document.querySelector(
        `input[name="password"]`
      ) as HTMLElement;
      passwordInput?.focus();
      return;
    }

    if (!agreement) {
      alert("약관에 동의해주세요.");
      const checkbox = document.getElementById("agreement");
      checkbox?.focus();
      return;
    }

    try {
      const res = await api.post(END_POINT.USERS_SIGNUP, {
        email,
        password,
        password_confirm,
        name,
        nickname,
        phone_number: phone,
        date_of_birth: `${birthYear}-${birthMonth}-${birthDay}`,
        area: area_id,
        interest: interest_id,
        digital_level: digitalLevel_id,
        // file: file_id,
      });
      if (res.status === 201) {
        alert("회원가입 완료");
        resetForm();
      }
      router.push("/login");
    } catch (err) {
      console.error("회원가입 실패", err);
    }

    resetForm();
    useAuthStore.getState().setLogout();
    if (isKakaoUser) {
      const { setKakaoUserSignedUp } = useSignupStore.getState();
      setKakaoUserSignedUp(true);
    }
    router.push("/");
  };
  return { handleSubmit, setValue };
}
