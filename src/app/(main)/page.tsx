import Image from "next/image";

export default function Home() {
  return (
  <>
    <nav className="flex justify-between items-center px-6 py-4 lg:px-12 bg-oneBg">
      <div className="text-xl font-bold text-Paragraph tracking-tighter">
        <a 
          className="flex items-center space-x-1" 
          href=""
        >
          <Image
            className="dark:invert"
            src="/Rahaan.png"
            alt="Rahaan Logo"
            width={32}
            height={32}
            priority
          />
          <span 
            className="text-xl font-bold mt-1">
              رهـان
          </span>
        </a>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <a 
          href="/Services" 
          className="text-lime-900 hover:text-lime-700 font-medium"
        >
          محصولات
        </a>
        <button className="bg-threeBg text-onAccOne text-sm px-4 py-2.5 rounded-3xl font-medium hover:bg-onAccOne hover:text-Paragraph transition-colors">
            <a 
              href="/booking" 
              className="cursor-pointer"
            >
              دمو رایگان
            </a>
        </button>
      </div>
    </nav>

    <main>
      <div className="min-h-screen bg-oneBg relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10 py-25">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl lg:min-w-115 font-medium text-Paragraph leading-tight">
                <strong>رهان</strong>، <br /> حسابداری اما آسان.
              </h1>
              <p className="text-Paragraph max-w-md text-sm">
                ساده و دقیق برای هر کسب‌وکار؛ از ERP سازمانی تا نرم‌افزارهای فروشگاهی؛ راه‌حل‌هایی که مدیریت مالی و عملکرد روزانه‌ی شما را هوشمندتر می‌کنند.
              </p>
              <button className="bg-Paragraph text-onAccOne px-4 py-3 rounded-3xl font-medium hover:bg-onAccOne hover:text-Paragraph transition-colors duration-300 text-xs">
              مشاوره رایگان
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <figure className="relative">
                <Image
                  width={400} 
                  height={400}
                  className=""
                  src="/Rahaan 03.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-5">
        <section className="grid grid-cols-1 space-y-25 px-4 lg:px-10 py-25 p-2">
          <section className="flex flex-col space-y-9 items-center text-Paragraph text-center">
            <span className="text-xs">محصولات و خدمات ما</span>
            <h2 className="text-3xl lg:text-5xl">ما حساب‌ها رو ساده می‌کنیم، <br/> تا شما وقت بیشتری برای رشد داشته باشید.
            </h2>
            <p className="text-sm"></p>از نرم‌افزارهای فروشگاهی تا ERP کامل شرکتی — هر ابزاری که برای مدیریت بهتر کارتون نیاز دارید اینجاست.
            <button className="bg-Paragraph text-onAccOne hover:bg-oneBg px-4 py-3 rounded-3xl font-medium hover:text-Paragraph transition-colors text-xs mt-7">آشنایی با محصولات</button>
          </section>
          <section className="">
            <section className="m-4 bg-oneAcc flex justify-center flex-col sm:flex-row sm:items-center py-10 px-4 space-y-18 sm:space-y-0 rounded-2xl sm:w-[80%]">
                <figure className="sm:w-1/2 w-auto">
                    <Image 
                      
                      width={400}
                      height={400}
                      src="/13. Online Store.png" 
                      alt="" 
                    />
                </figure>
                <section>
                    <h3 className="mb-6 text-2xl lg:text-4xl text-onAccOne font-bold">رهان‌ استور</h3>
                    <p className="mb-17 text-sm text-onAccOne">نرم افزاری راهبردی و کاربر پسند  به همراه آموزش های متنوع و رایگان به علاوه پشتیبانی آنلاین 24 ساعته، <br /> مخصوص کسب و کارهای کوچک</p>
                    <section className="*:bg-fourBg *:hover:bg-oneBg *:text-xs gap-4 *:font-medium *:text-onAccTwo *:px-4 *:py-3 *:rounded-2xl *:transition-colors *:duration-300 child">
                        <button className="mb-2 sm:mb-0">فروشگاهی</button>
                        <button>مدیریت فروش</button>
                        <button>کاربری آسان</button>
                    </section>
                </section>
            </section>
            <section className="m-4 bg-oneAcc flex flex-col sm:flex-row sm:items-center py-10 px-4 space-y-18 sm:space-y-0 rounded-2xl sm:w-[80%] sm:float-end">
                <figure className="w-auto sm:w-1/2">
                    <Image 
                      width={400}
                      height={400}
                      src="/16. Office Building.png" 
                      alt=""
                    />
                </figure>
                <section>
                  <h3 className="mb-6 text-2xl lg:text-4xl text-onAccOne font-bold">رهان اکو</h3>
                  <p className="mb-17 text-sm text-onAccOne">گزینه ایی هوشمندانه برای مدیرانی که میخواهند از مشکلات ساختاری دوری کنند <br /> و به سمت رشد و توسعه حرکت کنند. نسخه ایی متفاوت از مجموعه رهان که مبتنی  بر رویکردهای ERP طراحی شده</p>
                  <section className="*:bg-fourBg *:hover:bg-oneBg *:text-xs gap-4 *:font-medium *:text-onAccTwo *:px-4 *:py-3 *:rounded-2xl *:transition-colors *:duration-300">
                        <button className="mb-2 sm:mb-0">مالی اداری</button>
                        <button>ERP</button>
                        <button>گزارش مدیریتی</button>
                    </section>
                </section>
            </section>
            <section className="m-4 bg-oneAcc flex flex-col sm:flex-row sm:items-center py-10 px-4 space-y-18 sm:space-y-0 rounded-2xl sm:w-[80%]">
                <figure className="w-auto sm:w-1/2">
                    <Image 
                      width={400}
                      height={400}
                      src="/4. Financial Security.png" 
                      alt=""
                    />
                </figure>
                <section>
                    <h3 className="mb-6 text-2xl lg:text-4xl text-onAccOne font-bold">رهان ERP</h3>
                    <p className="mb-17 text-sm text-onAccOne">پیشنهادی برای مدیران بزرگ و سازمان های تجاری و دولتی که در هر لحظه، <br /> به منظور اخذ تصمیمات دقیق، گزارشات متنوع و قابل دسترسی از هلدینگ و سازمان خود میخواهند.</p>
                    <section className="*:bg-fourBg *:hover:bg-oneBg *:text-xs gap-4 *:font-medium *:text-onAccTwo *:px-4 *:py-3 *:rounded-2xl *:transition-colors *:duration-300">
                        <button className="mb-2 sm:mb-0">ERP سازمانی</button>
                        <button>مدیریت منابع</button>
                        <button>تحلیل داده</button>
                    </section>
                </section>
            </section>
            <section className="m-4 bg-oneAcc flex flex-col sm:flex-row sm:items-center py-10 px-4 space-y-18 sm:space-y-0 rounded-2xl sm:w-[80%] sm:float-end">
                <figure className="w-auto sm:w-1/2">
                    <Image
                      width={400}
                      height={400}
                      src="/5. Mobile Banking.png" 
                      alt=""
                    />
                </figure>
                <section>
                    <h3 className="mb-6 text-2xl lg:text-4xl text-onAccOne font-bold">افزونه‌ها</h3>
                    <p className="mb-17 text-sm text-onAccOne">
                        افزونه‌های Rahaan امکاناتی مثل اتصال به سامانه مودیان و وب‌اپلیکیشن فروش و مدیریت را فراهم می‌کنند تا نرم‌افزارهای شما یکپارچه‌تر، سریع‌تر و در هر زمان قابل‌دسترسی باشند.
                    </p>
                    <section className="*:bg-fourBg *:hover:bg-oneBg *:text-xs flex gap-2 *:font-medium *:text-onAccTwo *:px-4 *:py-3 *:rounded-2xl *:transition-colors *:duration-300">
                        <button className="mb-2 sm:mb-0">افزونه Rahaan</button>
                        <button>سامانه مودیان</button>
                        <button>وب اپلیکیشن</button>
                    </section>
                </section>
            </section>
          </section>
        </section>
      </section>
      <section className="p-9 sm:p-25">
        <section className="flex flex-col items-center space-y-10 sm:space-y-30 bg-fiveBg sm:bg-transparent">
          <h3 className="text-3xl lg:text-5xl text-center text-Paragraph">Hear From Our Happy Clients</h3>
          <section className="sm:grid sm:grid-cols-[30%_10%_60%] sm:gap-2">
            <section className="flex sm:flex-col sm:border-l sm:pl-12">
              <section className="bg-onAccTwo p-4 text-xs flex flex-col space-y-2 sm:space-y-4 rounded-2xl">
                <div className="h-0.5 w-full bg-emerald-600"></div>
                <h5 className="text-onAccOne sm:text-lg">Graphic Designer</h5>
                <p className="text-onAccFour text-xs">Ontario, Canada</p>
              </section>
              <section className="p-4 text-xs flex flex-col space-y-2 sm:space-y-4 rounded-2xl">
                <div className="h-0.5 w-full bg-lime-900"></div>
                <h5 className="text-onAccTwo sm:text-lg">Commercial Photographer</h5>
                <p className="text-onAccThree text-xs">Ontario, Canada</p>
              </section>
              <section className="p-4 text-xs flex flex-col space-y-2 sm:space-y-4 rounded-2xl">
                <div className="h-0.5 w-full bg-lime-900"></div>
                <h5 className="text-onAccTwo sm:text-lg">Stylist</h5>
                <p className="text-onAccThree text-xs">Austin, Texas</p>
              </section>
            </section>
            <section></section>
            <section className="flex flex-col space-y-12">
                <blockquote className="text-xl sm:text-4xl mt-10 text-Paragraph">I used to worry about missing deductions, but with Noble Finance, I know I’m maximizing my savings.</blockquote>
                <div className="flex items-center justify-start gap-x-4 mt-6">
                    <Image 
                      className="h-12 object-cover rounded-2xl" 
                      width={50} src="/005.jpg" 
                      height={50}
                      alt=""
                    />
                    <span className="ml-2 text-sm text-Paragraph">Margaret L., 24 years old</span>
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
      <section className="mx-6 my-6 py-18 flex flex-col md:flex-row gap-x-6 space-y-6 md:space-y-0">
        <section className="bg-oneBg md:w-1/2 aspect-square md:aspect-auto rounded-2xl flex items-center justify-center">
          <figure>
            <Image 
              className="h-80" 
              src="/20. Financial Report.png"
              width={400}
              height={400}
              alt="" 
            />
          </figure>
        </section>
        <section className="md:w-1/2 rounded-2xl bg-threeBg text-onAccOne p-10 sm:p-15 flex flex-col justify-center space-y-10">
          <h4 className="text-xl md:text-3xl font-semibold">راه‌حل مخصوص کسب‌وکار شما</h4>
          <p className="font-light">ما باور داریم مدیریت مالی نباید پیچیده باشه. نرم‌افزارهای ما طوری طراحی شدن که با نوع کار شما هماهنگ بشن — چه فروشگاه باشی، چه شرکت خدماتی یا تولیدی. تمرکز ما روی سه چیزه: سادگی، دقت و اطمینان.</p>
          <button className="hover:bg-oneBg w-fit px-4 py-3 rounded-3xl font-medium bg-fourBg text-Paragraph transition-colors duration-300 text-sm">بیشتر بدانید</button>
        </section>
      </section>

      <section>
        <section className="flex flex-col space-y-15 items-center py-40 px-6 sm:px-20 lg:px-30">
          <strong className="text-center text-2xl sm:text-4xl font-medium text-Paragraph">مدیریت مالی آسون‌تر از همیشه! همین امروز شروع کن.</strong>
          <button className="bg-threeBg text-onAccOne px-4 py-3 rounded-3xl font-medium hover:bg-oneBg hover:text-Paragraph transition-colors duration-300 text-sm w-fit">مشاهده دمو</button>
        </section>
      </section>
    </main>

    <footer>
      <section className="sm:hidden bg-threeBg p-8 flex flex-col space-y-20">
        <section className="text-white space-y-20">
          <h6 className="text-xl font-bold tracking-tighter text-onAccOne">رهان</h6>
          <section className="flex justify-between items-center">
            <span className="text-onAccFour">محصولات</span>
            <button className="hover:bg-emerald-200 w-fit px-4 py-3 rounded-3xl font-medium bg-fourBg text-Paragraph transition-colors duration-300 text-xs">درخواست دمو</button>
          </section>
        </section>
        <section className="space-y-6">
          <section className="text-xs">
            <span className="block text-onAccOne">تلاقی علم و صنعت</span>
            <span className="text-onAccFour">ساده و دقیق برای هر کسب‌وکار.</span>
          </section>
          <b className="text-onAccFour text-xs">© 1404 تمام حقوق محفوظ است.</b>
        </section>
      </section>

      <section className="bg-threeBg grid-cols-[45%_10%_45%] md:px-10 md:py-8 hidden md:grid">
        <section className="flex flex-col justify-between text-onAccOne space-y-66">
          <h6 className="text-xl font-bold tracking-tighter">رهان</h6>
          <section className="text-xs">
            <span className="block text-onAccOne">تلاقی علم و صنعت</span>
            <span className="text-onAccFour">ساده و دقیق برای هر کسب‌وکار.</span>
          </section>
        </section>
        <section></section>
        <section className="flex flex-col space-y-66">
          <section className="flex justify-between space-x-4 lg:justify-start items-center">
            <span className="text-onAccFour">محصولات</span>
            <button className="hover:bg-oneBg w-fit px-4 py-3 rounded-3xl font-medium bg-onAccOne text-Paragraph transition-colors duration-300 text-sm">درخواست دمو</button>
          </section>
          <b className="text-onAccFour text-xs">©  تمامی حقوق محفوظ است.</b>
        </section>
      </section>
    </footer>
  </>
  );
}
