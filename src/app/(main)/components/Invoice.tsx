import React from "react";

export interface InvoiceItem { // export اضافه شد
  desc: string;
  qty: number;
  price: number;
}

export interface InvoiceData { // export اضافه شد
  date: string;
  number: string;
  items: InvoiceItem[];
  total: number;
}

const Invoice: React.FC<{ data: InvoiceData }> = ({ data }) => {
  return (
   <div className="overflow-x-auto">
  <table className="min-w-full border-collapse border-2 border-gray-300 mb-10 text-right text-sm sm:text-base">
    <thead className="bg-blue-600 text-white text-lg">
      <tr>
        <th className="border border-gray-300 p-2 sm:p-4">ردیف</th>
        <th className="border border-gray-300 p-2 sm:p-4">شرح کالا/خدمات</th>
        <th className="border border-gray-300 p-2 sm:p-4">تعداد</th>
        <th className="border border-gray-300 p-2 sm:p-4">قیمت واحد</th>
        <th className="border border-gray-300 p-2 sm:p-4">مبلغ</th>
      </tr>
    </thead>
    <tbody>
      {data.items.map((item, i) => (
        <tr key={i} className="even:bg-gray-50 text-sm sm:text-base">
          <td className="border border-gray-300 p-2 sm:p-4 text-center">{i + 1}</td>
          <td className="border border-gray-300 p-2 sm:p-4">{item.desc}</td>
          <td className="border border-gray-300 p-2 sm:p-4 text-center">{item.qty}</td>
          <td className="border border-gray-300 p-2 sm:p-4">{item.price.toLocaleString()} تومان</td>
          <td className="border border-gray-300 p-2 sm:p-4">{(item.qty * item.price).toLocaleString()} تومان</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default Invoice;
