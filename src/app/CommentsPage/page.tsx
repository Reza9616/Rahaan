// app/comments/page.tsx
"use client"; // چون فرم و state داریم، باید Client Component باشد

import { useState } from "react";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";

interface Comment {
  name: string;
  message: string;
}

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    const newComment: Comment = { name, message };
    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  return (
    <>
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-blue-50">
        <h1 className="text-4xl font-bold text-center">نظر مشتریان ما</h1>
      </section>

      {/* Comment Form */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">نام شما</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-2"
              placeholder="نام خود را وارد کنید"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">نظر شما</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-lg p-2"
              placeholder="نظر خود را وارد کنید"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1877F2] text-white rounded-lg px-4 py-2 hover:bg-[#165ec9] transition"
          >
            ارسال نظر
          </button>
        </form>
      </section>

      {/* Comments List */}
      <section className="max-w-2xl mx-auto px-6 py-12 space-y-6">
        {comments.length === 0 && (
          <p className="text-muted-foreground text-center">هیچ نظری ثبت نشده است.</p>
        )}
        {comments.map((comment, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <p className="font-semibold mb-1">{comment.name}</p>
            <p className="text-muted-foreground">{comment.message}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}