import * as React from "react";
import { ProductDropCard, DropItem } from "@/components/ui/product-card-3";

const upcomingDrops: DropItem[] = [
  {
    time: "",
    name: "رهان ERP",
    collection: "نرم افزار رهان ERP مخصوص سازمان ها و هلدینگ های تجاری",
    imageSrc: "/erp01.jpg",
  },
  {
    time: "",
    name: "رهان Eco",
    collection: "نرم افزار رهان ERP مخصوص سازمان ها و هلدینگ های تجاری",
    imageSrc: "/erp02.jpg",
  }, 
  {
    time: "",
    name: "صندوق فروشگاهی",
    collection: "نرم افزار رهان صنعتی مخصوص کارخانجات و شرکت های بازرگانی",
    imageSrc: "/safebox.jpg",
  },
  {
    time: "",
    name: "فیش پرینتر",
    collection: "نرم افزار رهان صنعتی مخصوص کارخانجات و شرکت های بازرگانی",
    imageSrc: "/fishprinter.png",
  },
  {
    time: "",
    name: "موس و کیبورد",
    collection: "نرم افزار رهان صنعتی مخصوص کارخانجات و شرکت های بازرگانی",
    imageSrc: "/mouse.jpg",
  },
  {
    time: "",
    name: "نسخه عمومی",
    collection: "نرم افزار رهان صنعتی مخصوص کارخانجات و شرکت های بازرگانی",
    imageSrc: "/omoomi.jpg",
  },
  {
    time: "",
    name: "طلافروشی",
    collection: "رهان فروشگاهی",
    imageSrc: "/gold.jpg",
  },
  {
    time: "",
    name: "سالن های زیبایی",
    collection: "رهان فروشگاهی",
    imageSrc: "/beauti-edu.jpg",
  },
  {
    time: "",
    name: "رستوران و کافه",
    collection: "رهان فروشگاهی",
    imageSrc: "/cafe.jpg",
  },
    {
    time: "",
    name: "هایپر مارکت و داروخانه",
    collection: "رهان فروشگاهی",
    imageSrc: "/hyper.jpg",
  },

];

const ProductDropCardDemo = () => {
  return (
    <div className="w-full bg-background p-15 flex items-center justify-center">
      <ProductDropCard
        title=""
        subtitle=""
        items={upcomingDrops}
      />
    </div>
  );
};

export default ProductDropCardDemo;