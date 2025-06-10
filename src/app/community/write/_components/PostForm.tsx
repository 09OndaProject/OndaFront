"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/common/Button";
import SelectBox from "@/components/common/SelectBox";
import {
  categoryOptions,
  digitalLevelOptions,
  interestOptions,
} from "@/constants/category";
import AreaDropdown from "../../_components/AreaDropdown";

const postSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요"),
  content: z.string().min(1, "내용을 입력해주세요"),
  category_id: z.number().min(1, "카테고리를 선택해주세요"),
  interest_id: z.number().min(1, "관심사를 선택해주세요"),
  digitalLevel_id: z.number().min(1, "디지털 난이도를 선택해주세요"),
  area_id: z.string().min(1, "지역을 선택해주세요"),
});

type PostFormData = z.infer<typeof postSchema>;

export default function PostForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
      category_id: 0,
      interest_id: 0,
      digitalLevel_id: 0,
      area_id: "",
    },
  });

  const onSubmit = (data: PostFormData) => {
    console.log("제출 데이터", data);
    // TODO: API 요청
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap w-full my-10 mx-auto gap-6 items-center justify-center"
    >
      <div className="flex flex-wrap gap-4 w-full">
        <SelectBox
          value={watch("category_id")}
          options={categoryOptions}
          placeholder="카테고리"
          onChange={(e) => setValue("category_id", Number(e.target.value))}
        />
        <SelectBox
          value={watch("interest_id")}
          options={interestOptions}
          placeholder="관심사"
          onChange={(e) => setValue("interest_id", Number(e.target.value))}
        />
        <AreaDropdown />
        <SelectBox
          value={watch("digitalLevel_id")}
          options={digitalLevelOptions}
          placeholder="디지털 난이도"
          onChange={(e) => setValue("digitalLevel_id", Number(e.target.value))}
        />
      </div>

      <div className="w-full relative">
        <input
          {...register("title")}
          placeholder={errors.title?.message || "제목을 입력하세요"}
          className={`w-full border-b p-4 rounded-md text-lg placeholder-gray-500 text-main focus:outline-none focus:ring-2 focus:ring-primary-deep ${
            errors.title && "placeholder-red-500"
          }`}
        />
      </div>
      <textarea
        {...register("content")}
        placeholder={errors.content?.message || "내용을 입력해주세요"}
        className={`w-full text-md p-4 min-h-[300px] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-deep ${
          errors.content && "placeholder-red-500"
        }`}
      />

      <Button width="w-[500px]" type="submit">
        등록
      </Button>
    </form>
  );
}
