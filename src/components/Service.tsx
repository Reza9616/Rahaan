import Image from "next/image";
import { Button } from "./ui/button";
export default function Service() {
    return (
              <section className="mt-5">
                <section className="grid grid-cols-1 space-y-25 px-4 lg:px-10 py-25 p-2">
                  <section className="flex flex-col space-y-9 items-center text-Paragraph text-center">
                    <span className="text-xs">محصولات و خدمات ما</span>
                    <h2 className="text-3xl lg:text-5xl">ما حساب‌ها رو ساده می‌کنیم، <br/> تا شما وقت بیشتری برای رشد داشته باشید.
                    </h2>
                    <p className="text-sm"></p>از نرم‌افزارهای فروشگاهی تا ERP کامل شرکتی — هر ابزاری که برای مدیریت بهتر کارتون نیاز دارید اینجاست.
                    <Button>آشنایی با محصولات</Button>
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
    )
}