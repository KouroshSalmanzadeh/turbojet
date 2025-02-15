"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import TitleBoldComponent from "@/utils/title bold/TitleBoldComponent";
import { useForm } from "react-hook-form";
import * as z from "zod";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

// import { useForm } from "react-hook-form";

import styles from "./contactUs.module.css";

import { contactUsSchema } from "@/zodSchema/contact-us";

type FormData = z.infer<typeof contactUsSchema>;

export default function ContactUsSection() {

  // const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
  //   const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const queryString = new URLSearchParams(data).toString();
      const response = await fetch(`https://hp-service.liara.run/send-message?${queryString}`);
    
      const result = await response.text();
    
      if (!response.ok) {
        throw new Error(result);
      }
    
      toast.success(result);
    } catch (error) {
      toast.error(`خطا: ${error instanceof Error ? error.message : "مشکلی پیش آمد"}`);
    }
  };
  

  return (
    <div className="w-full" id="contact">
      <TitleBoldComponent title="تماس با ما" className="w-full text-center" />
      <p className="text-center my-8">
        سوالات خود را از طریق فرم زیر با ما در میان بگذارید؛ پشتیبانی توربوجت در اسرع وقت به درخواست شما رسیدگی خواهد کرد.      </p>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <form
            className="mt-12 flex flex-wrap"
            action=""
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* name Input */}
            <div className="w-full lg:w-1/2 lg:px-2">
              <div className="relative">
                <label htmlFor="name" className="mb-2 block ms-1">
                  نام شما:
                </label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  dir="rtl"
                  name="name"
                  type="text"
                  className="bg-transparent h-14 p-2 w-full rounded-lg border-2 border-[var(--border-default)] focus:outline-none focus:border-[var(--secondary-deep-color)]"
                  placeholder="نام و نام خانوداگی"
                  autoComplete="off"
                />
                {errors?.name && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors?.name?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile Input */}
            <div className="w-full lg:w-1/2 lg:px-2 lg:mt-0 mt-10">
              <div className="relative">
                <label htmlFor="name" className="mb-2 block ms-1">
                  موبایل:
                </label>
                <input
                  {...register("mobile", { required: true })}
                  id="mobile"
                  type="text"
                  dir="rtl"
                  maxLength={11}
                  inputMode="numeric"
                  name="mobile"
                  className="bg-transparent text-left h-14 p-2 w-full rounded-lg border-2 border-[var(--border-default)] focus:outline-none focus:border-[var(--secondary-deep-color)]"
                  placeholder="091212345678"
                  autoComplete="off"
                />
                {errors?.mobile && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors?.mobile?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message Input */}
            <div className="relative lg:px-2 w-full mt-10">
              <label htmlFor="message" className="mb-2 block ms-1">
                متن پیام:
              </label>
              <textarea
                {...register("message", { required: true })}
                name="message"
                className="bg-transparent text-right p-2 w-full rounded-lg border-2 border-[var(--border-default)] focus:outline-none focus:border-[var(--secondary-deep-color)]"
                id="message"
                placeholder="پیام خود را اینجا بنویسید ..."
                rows={6}
              ></textarea>
              {errors?.message && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors?.message?.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-14 text-xl block w-full lg:w-1/4 md:w-1/2 mx-auto cursor-pointer rounded-xl bg-[var(--secondary-deep-color)] py-3 text-center font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <div
                  className="flex justify-center items-center gap-x-3"
                  role="status"
                >
                  در حال ارسال
                  <svg
                    className="size-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              ) : (
                "ثبت پیام"
              )}
            </button>
          </form>
        </div>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
