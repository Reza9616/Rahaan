"use client";
import Image from "next/image";
import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeComment = UserComment[activeIndex];

    return (
    <>
      <section className="p-9 sm:p-25">
        <section className="flex flex-col items-center space-y-10 sm:space-y-30 bg-fiveBg sm:bg-transparent">
          <h3 className="text-3xl lg:text-5xl text-center text-Paragraph">بشنو از کسایی که استفاده کردن!</h3>
          <section className="sm:grid sm:grid-cols-[30%_10%_60%] sm:gap-2">
            <aside className="flex sm:flex-col sm:border-l sm:pl-12">
              {UserComment.map((Item, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`p-4 text-xs flex flex-col space-y-2 sm:space-y-4 rounded-2xl transition-all duration-100 ${
                  activeIndex === i 
                  ? "bg-twoBg border border-emerald-600 shadow-md"
                  : "bg-white hover:bg-gray-50"
                }`}>
                <div className={`h-0.5 w-full  ${
                  activeIndex === i ? "bg-threeBg" : "bg-threeBg/20"
                  }`}></div>
                <h5 className="text-Paragraph sm:text-lg text-right">{Item.jobTitle}</h5>
                <p className="text-xs text-Paragraph/50 text-right">{Item.coName}</p>
              </button>
                ))}
            </aside>
            <section></section>
            <section className="flex flex-col space-y-12">
                <blockquote className="text-xl sm:text-4xl mt-10 text-Paragraph">{activeComment.comment}</blockquote>
                <div className="flex items-center justify-start gap-x-4 mt-6">
                    <Image 
                      className="h-12 object-cover rounded-2xl" 
                      width={50} 
                      src={`${activeComment.imgUrl}`}
                      height={50}
                      alt=""
                    />
                    <span className="ml-2 text-sm text-Paragraph">{activeComment.name}</span>
                </div>
            </section>
          </section>
        </section>
      </section>
      <section>
        <figure>
          <Image 
            className="max-h-screen w-full object-cover"
            width={1920}
            height={1}
            src="/006.jpg" 
            alt=""
          />
        </figure>
      </section>
    </>
    )
}
