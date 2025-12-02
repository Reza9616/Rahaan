import * as React from "react";
import { ProductDropCard, DropItem } from "@/components/ui/product-card-3";

const upcomingDrops: DropItem[] = [
  {
    time: "",
    name: "رهان ERP",
    collection: "سطح یک",
    imageSrc: "/erp01.jpg",
  },
  {
    time: "",
    name: "رهان ERP",
    collection: "سطح دو",
    imageSrc: "/erp02.jpg",
  },
  {
    time: "",
    name: "رهان ERP",
    collection: "سطح سه",
    imageSrc: "/erp03.jpg",
  },
  {
    time: "",
    name: "رهان صنعتی",
    collection: "سطح یک",
    imageSrc: "/eco01.jpg",
  },
  {
    time: "",
    name: "رهان صنعتی",
    collection: "سطح دو",
    imageSrc: "/eco02.jpg",
  },
  {
    time: "",
    name: "رهان صنعتی",
    collection: "سطح سه",
    imageSrc: "/eco03.jpg",
  },
  {
    time: "",
    name: "نسخه عمومی",
    collection: "رهان فروشگاهی",
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
    <div className="w-full bg-background p-8 flex items-center justify-center">
      <ProductDropCard
        title="محصولات رهان"
        subtitle=""
        items={upcomingDrops}
      />
    </div>
  );
};

export default ProductDropCardDemo;