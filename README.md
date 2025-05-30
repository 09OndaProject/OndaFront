# Onda

---

## 📁 프로젝트 구조

```

app/
├── apis/          # Axios 기반 API 요청 함수
├── components/    # 공통 및 페이지별 컴포넌트
├── hooks/         # 커스텀 React Hooks
├── libs/          # 공통 유틸 함수 또는 외부 라이브러리 래퍼
├── pages/         # Next.js 페이지 라우트
├── types/         # 전역 타입 정의 (TypeScript)
├── utils/         # 포맷터 등 유틸 함수

````

---

## 사용 기술 스택

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query (TanStack)](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint + Prettier](https://prettier.io/)

---

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
````

---

## 코드 스타일

* 코드 포맷: Prettier
* 린트 검사: ESLint
* import alias: `@/` → `app/` 디렉토리 기준

## 기타

* `.env.local`에 API URL 등 환경 변수를 설정
* React Query Devtools, 상태 관리 등은 필요에 따라 추가 예정 (이슈에 공유해주세요.)

---

## Git 브랜치 & 커밋 컨벤션

### 브랜치 규칙

- 한 기능 이슈에 대해 `feature/#번호-기능이름` 형식으로 브랜치를 생성
  - 예: `feature/#24-login`
- 세부 작업은 필요 시 아래처럼 세분화
  - 예: `feature/#24-login_ui`, `feature/#24-login_api`, `feature/#24-login_refactor`
- 모든 브랜치는 **이슈 번호를 포함**하여 추적 가능하게 설정
- 머지 순서는 다음과 같이 진행:
  1. 세부 단위 브랜치
  2. 메인 기능 브랜치
  3. `develop` 병합

---

### 커밋 메시지 규칙

- 이슈 번호와 함께 작업 목적을 명확히 작성
- 브랜치명과 커밋 메시지는 연관되게 유지

#### 예시:
```bash
브랜치명: feature/#42-follow-idol  
커밋:    :rocket: feat: #42 아이돌 팔로우 버튼 추가
```

### 커밋 태그 종류

| 태그         | 깃모지          | 설명                    | 
| ---------- | -------------- |----------------------- |
| `feat`     | :sparkles: ✨  | 새로운 기능 추가           |
| `fix`      | :bug: 🐛       | 버그 수정                |
| `style`    | :lipstick: 💄  | 코드 스타일 변경 (로직 변경 없음)  |
| `refactor` | :recycle: ♻️ , :art: 🎨  | 리팩토링 (기능 변경 없이 구조 개선) |
| `chore`    | :wrench: 🔧    | 설정 파일 등 기타 변경      |
| `docs`     | :memo: 📝      | 문서 수정                |
| `test`     |:white_check_mark: ✅ | 테스트 코드 추가/수정 |
