"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/stores/useAuth";
import { useSignupStore } from "@/stores/useSignUpStore";
// import api from "@/apis/app";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  email: string;
  nickname: string;
  name: string;
  role: "user" | "admin" | "leader";
}
export default function KakaoCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const auth = useAuthStore.getState();
  const signup = useSignupStore.getState();

  useEffect(() => {
    const fetchKakaoCallback = async () => {
      if (!code || !state) return;

      try {
        const res = await axios.post(
          "https://api.ondamoim.com/api/users/kakao/callback",
          { code, state },
          { withCredentials: true }
        );
        console.log(res);
        console.log("로그인 성공", res.data);
        const { access_token, csrf_token } = res.data;
        const decoded: DecodedToken = jwtDecode(access_token);
        const isSignUp = Boolean(decoded.email);
        const user = {
          ...decoded,
          isAdmin:
            decoded.role === "admin" ||
            decoded.role === "leader" ||
            decoded.role === "user",
        };
        console.log("res", res.data.user);

        auth.setAccessToken?.(access_token);
        auth.setCsrfToken?.(csrf_token);
        auth.setUser?.(user);
        // console.log("user", user);
        if (isSignUp) {
          signup.setKakaoUserSignedUp(true);
          router.push("/");
        } else {
          signup.setIsKakaoUser(true);
          signup.setValue("email", decoded.email);
          signup.setValue("nickname", decoded.nickname);
          router.push("/signup");
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error("Axios Error:", err.response?.data);
        } else {
          console.error("Unexpected Error:", err);
        }
      }
    };
    fetchKakaoCallback();
    console.log("code:", code); // KakaoCallbackPage useEffect 안에
  }, [code, state, auth, signup, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg">카카오 로그인 처리중...</p>
    </div>
  );
}
