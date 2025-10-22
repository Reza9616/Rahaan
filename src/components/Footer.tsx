export default function Footer()
{
    return(
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
    )
}