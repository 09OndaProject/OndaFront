"use client";

import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import { Option, Post } from "@/types/post";
import { useEffect } from "react";
import ImageUploader from "./ImageUploader";
import DropdownInput from "../../_components/DropdownInput";
import useOptions from "@/hooks/useOptions";
import AreaDropdown from "../../_components/AreaDropdown";
import { PostFile } from "@/types/file";

interface PostFormProps {
  initialValue?: Post;
  onSubmit: (newPost: PostFormData) => void;
  mode?: "create" | "edit";
  onCancel?: () => void;
}

export interface PostFormData {
  title: string;
  content: string;
  category?: Option;
  interest?: Option;
  area?: {
    parentId?: Option;
    childId?: Option;
  };
  file?: PostFile | File | null;
}

export default function PostForm({
  initialValue,
  onSubmit,
  mode = "create",
  onCancel,
}: PostFormProps) {
  const methods = useForm<PostFormData>({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      category: undefined,
      interest: undefined,
      area: undefined,
      file: null,
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    control,
    watch,
    formState: { errors, isSubmitted },
    reset,
  } = methods;

  const { categoryOptions, interestOptions, areaOptions } = useOptions();

  // 기존 게시글이 없는 경우 데이터폼 초기화
  useEffect(() => {
    if (initialValue) {
      const childId = initialValue.area?.id;

      // childId를 통해 parentId를 찾음
      const parent = areaOptions.find((p) =>
        p.children?.some((child) => child.id === childId)
      );

      // 찾은 parentId와 childId로 areaValue 변수
      const areaValue =
        parent && childId != null
          ? {
              parentId: { id: parent.id, name: parent.area_name },
              childId: parent.children?.find(
                (child) => child.id === childId
              ) ?? { id: 0, name: "" },
            }
          : undefined;

      reset({
        title: initialValue.title,
        content: initialValue.content,
        category: initialValue.category ?? undefined,
        interest: initialValue.interest ?? undefined,
        area: areaValue,
        file:
          initialValue.file && typeof initialValue.file === "object"
            ? initialValue.file
            : null,
      });
    }
  }, [initialValue, reset, areaOptions]);

  const onVaild = (data: PostFormData) => {
    if (!data.category) {
      setError("category", {
        type: "manual",
        message: "카테고리를 선택해주세요.",
      });
      return;
    }
    clearErrors("category");
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onVaild)}
        className="flex flex-col w-full gap-6 my-10 mx-auto"
      >
        <div className="flex flex-wrap gap-4 w-full">
          <DropdownInput
            value={watch("category")}
            onChange={(value) => setValue("category", value)}
            options={categoryOptions}
            placeholder="카테고리"
            className="w-[150px]"
          />
          <DropdownInput
            value={watch("interest")}
            options={interestOptions}
            placeholder="관심사"
            onChange={(value) => setValue("interest", value)}
            className="w-[250px]"
          />
          <AreaDropdown
            options={areaOptions}
            value={watch("area")}
            onChange={(value) => setValue("area", value)}
            className="flex-grow"
          />
        </div>

        <input
          {...register("title", { required: "제목을 입력해주세요." })}
          name="title"
          placeholder="제목을 입력해주세요."
          className="w-full border-b p-4 text-lg rounded-md placeholder-gray-500 text-main focus:outline-none focus:ring-2 focus:ring-primary-deep"
        />

        <textarea
          {...register("content", { required: "내용을 입력해주세요." })}
          name="content"
          placeholder="내용을 입력해주세요."
          className="w-full min-h-[300px] rounded-md text-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary-deep"
        />

        {/* 이미지 업로더 컴포넌트 */}
        <ImageUploader
          setValue={setValue}
          control={control}
          initialFile={initialValue?.file ?? undefined}
        />

        <div className="flex gap-4 justify-center w-full">
          {mode === "edit" && onCancel && (
            <Button
              color="gray"
              width="w-[200px]"
              onClick={onCancel}
              type="button"
            >
              취소
            </Button>
          )}
          <Button type="submit" width="w-[200px]">
            {mode === "edit" ? "수정 완료" : "등록"}
          </Button>
        </div>
        {isSubmitted && (
          <div className="text-red-500 text-sm mt-2 text-center space-y-1">
            {errors.title ? (
              <div>{errors.title.message || "제목을 입력해주세요"}</div>
            ) : errors.content ? (
              <div>{errors.content.message || "내용을 입력해주세요"}</div>
            ) : errors.category ? (
              <div>{errors.category.message || "카테고리를 선택해주세요"}</div>
            ) : null}
          </div>
        )}
      </form>
    </FormProvider>
  );
}
