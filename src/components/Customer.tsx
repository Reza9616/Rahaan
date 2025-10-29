"use client";
// import Image from "next/image";
// import { useState } from "react";
// import { Container } from "./ui/Container";

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
  // const [activeIndex, setActiveIndex] = useState(0);
  // const activeComment = UserComment[activeIndex];

    return (
    <>


      {/* <section className="p-4 sm:p-25">
        <section className="flex flex-col items-center space-y-10 sm:space-y-30 bg-accent sm:bg-transparent sm:px-4 py-6">
          <h3 className="text-3xl lg:text-5xl text-center text-primary">نظر مشتریان:</h3>
          <Container>
          <section className="sm:grid sm:grid-cols-[30%_10%_60%] sm:gap-2">
            <aside className="flex space-x-2 sm:flex-col sm:space-y-2 sm:border-l sm:pl-12">
              {UserComment.map((Item, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`p-4 text-xs flex flex-col space-y-2 sm:space-y-4 rounded-2xl transition-all duration-100 ${
                  activeIndex === i 
                  ? "bg-accent border border-border shadow-md"
                  : "bg-white hover:bg-gray-50"
                }`}>
                <div className={`h-0.5 w-full  ${
                  activeIndex === i ? "bg-primary" : "bg-primary/20"
                  }`}></div>
                <h5 className="text-Paragraph sm:text-lg text-right">{Item.jobTitle}</h5>
                <p className="text-xs text-Paragraph/50 text-right">{Item.coName}</p>
              </button>
                ))}
            </aside>
            <section></section>
            <section className="flex flex-col space-y-12">
                <blockquote className="text-xl sm:text-4xl mt-10 text-primary">{activeComment.comment}</blockquote>
                <div className="flex items-center justify-start gap-x-4 mt-6">
                    <Image 
                      className="h-12 object-cover rounded-2xl" 
                      width={50} 
                      src={`${activeComment.imgUrl}`}
                      height={50}
                      alt=""
                    />
                    <span className="ml-2 text-sm text-primary">{activeComment.name}</span>
                </div>
            </section>
          </section>
          </Container>
        </section>
      </section> */}

      <section>
        <section className="flex flex-col space-y-15 items-center py-40 px-6 sm:px-20 lg:px-30">
          <strong className="text-center text-2xl sm:text-4xl font-medium text-Paragraph">مدیریت مالی آسون‌تر از همیشه! همین امروز شروع کن.</strong>
          <button className="bg-threeBg text-onAccOne px-4 py-3 rounded-3xl font-medium hover:bg-oneBg hover:text-Paragraph transition-colors duration-300 text-sm w-fit">مشاهده دمو</button>
        </section>
      </section>

    </>
    )
}
