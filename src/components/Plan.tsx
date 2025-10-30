import Image from "next/image";
import { Container } from "./ui/Container";
import { Button } from "./ui/button";
export default function Plan() {
    return (
    <Container>
    <section className="mx-6 my-6 py-18 flex flex-col md:flex-row gap-x-6 space-y-6 md:space-y-0">
        <section className="md:w-1/2 aspect-square md:aspect-auto rounded-2xl flex items-center justify-center">
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
        <section className="md:w-1/2 rounded-2xl bg-accent p-10 sm:p-15 flex flex-col justify-center space-y-10">
          <h4 className="text-xl md:text-3xl font-semibold">راه‌حل مخصوص کسب‌وکار شما</h4>
          <p className="font-light">ما باور داریم مدیریت مالی نباید پیچیده باشه. نرم‌افزارهای ما طوری طراحی شدن که با نوع کار شما هماهنگ بشن — چه فروشگاه باشی، چه شرکت خدماتی یا تولیدی. تمرکز ما روی سه چیزه: سادگی، دقت و اطمینان.</p>
          <Button>بیشتر بدانید</Button>
        </section>
    </section>
    </Container>
    )}