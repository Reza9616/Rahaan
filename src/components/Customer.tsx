"use client";

import { Button } from "./ui/button";

import Image from "next/image";

type UserCommentType = {
  jobTitle: string;
  coName: string;
  comment: string;
  name: string;
  imgUrl: string;
};

export const UserComment: UserCommentType[] = [
  {
    jobTitle : "مدیر عامل",
    coName: "هلدینگ هرم طلایی",
    comment: "قبل از استفاده از این نرم‌افزار، گزارش‌گیری‌هامون زمان زیادی می‌برد. الان اطلاعات مالی شرکت همیشه در دسترسمه و تصمیم‌گیری‌ها سریع‌تر انجام می‌شن.",
    name: "مهدی علی آبادی",
    imgUrl: "/DefaultPerson.webp",
  },
  {
    jobTitle : "حسابدار کل",
    coName: "هرم طلایی شرق",
    comment: "کار با نرم‌افزار راحته و نیاز به آموزش پیچیده نداره. بیشتر کارها خودکار شده و هماهنگی بین بخش‌ها خیلی بهتر شده.",
    name: "ژاله ابراهیمی مجد",
    imgUrl: "/DefaultPerson.webp",
  },
  {
    jobTitle : "مدیر شرکت",
    coName: "هرم طلایی شرق",
    comment: "ثبت اسناد و بستن حساب‌ها خیلی سریع‌تر انجام می‌شه. از وقتی از این سیستم استفاده می‌کنیم، خطاهای محاسباتی به حدافل رسیده.",
    name: "فرشته دیدار",
    imgUrl: "/DefaultPerson.webp",
  },
];

export default function Customer() {

    return (
    <div className="py-40 px-6 sm:px-20 lg:px-30">
        <section className="flex flex-col space-y-15 items-center">
          <strong className="text-center text-2xl sm:text-4xl font-medium">مدیریت مالی آسون‌تر از همیشه! همین امروز شروع کن.</strong>
          <Button>مشاهده دمو</Button>
        </section>

        <section className="max-w-xl mx-auto">
          <Image 
            src={"/boxes.png"}
            width={1400}
            height={1400}
            alt=""
            className="drop-shadow-2xl grayscale-100 hover:grayscale-0 transition-all"
          />
        </section>

    </div>
    )
}
