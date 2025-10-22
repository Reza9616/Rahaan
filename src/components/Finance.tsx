export default function Finance() {
    return (
    <section className="px-4 sm:px-10 py-20">
        <section className="lg:relative space-y-20 sm:space-y-25 lg:space-y-40">
          <section className="flex flex-col lg:flex-row space-y-8 justify-between text-Paragraph">
            <h4 className="text-3xl lg:text-5xl lg:w-142">مدیریت هوشمند برای همه‌ی کسب‌وکارها</h4>
            <p className="lg:w-130 text-sm lg:text-left">ما باور داریم که نرم‌افزارهای مالی نباید پیچیده باشن. چه تازه شروع کرده باشی، چه یه شرکت چندبخشی داشته باشی — ابزارهای ما طوری طراحی شدن که کارتو راحت‌تر کنن، نه سخت‌تر.</p>
          </section>
          <section className="grid grid-col-1 lg:grid-cols-3">
            <section className="flex flex-col space-y-6 lg:border-r-dividerOne lg:border-r-2 lg:pr-6 text-Paragraph">
                <div className="bg-dividerOne h-px mt-10 lg:hidden"></div>
                <svg className="w-7 h-7"><use href="#app-window"></use></svg>
                <h6 className="text-xl lg:text-3xl">برای حسابداران و مدیران مالی</h6>
                <span className="text-sm">سادگی و دقت</span>
                <p className="text-sm pl-8">تمام اطلاعات مالی، گزارش‌ها و پرداخت‌ها رو یکجا ببین. از اشتباه‌های انسانی و تأخیرهای حسابرسی خلاص شو.</p>
            </section>
            <section className="flex flex-col space-y-6 lg:border-r-dividerOne lg:border-r-2 lg:pr-6 text-Paragraph">
                <div className="bg-dividerOne h-px mt-10 lg:hidden"></div>
                <svg className="w-7 h-7"><use href="#user"></use></svg>
                <h6 className="text-xl lg:text-3xl">برای فروشگاه‌ها و کسب‌وکارهای کوچک</h6>
                <span className="text-sm">کنترل و سرعت</span>
                <p className="text-sm pl-8">از ثبت فاکتور تا موجودی کالا و فروش روزانه — همه چیز توی یک پنل ساده و فارسی.</p>
            </section>
            <section className="flex flex-col space-y-6 lg:border-r-dividerOne lg:border-r-2 lg:pr-6 text-Paragraph">
                <div className="bg-dividerOne h-px mt-10 lg:hidden"></div>
                <svg className="w-7 h-7"><use href="#calculator"></use></svg>
                <h6 className="text-xl lg:text-3xl">برای شرکت‌ها و سازمان‌ها</h6>
                <span className="text-sm">یکپارچگی و نظم</span>
                <p className="text-sm pl-8">با سیستم ERP ما، بخش‌های مالی، منابع انسانی و انبارت با هم هماهنگ می‌شن تا تصمیم‌گیری‌هات سریع‌تر و دقیق‌تر بشن.</p>
            </section>
          </section>
        </section>
      </section>
    )
}