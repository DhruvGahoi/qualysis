// import Link from "next/link";

// export default function InterviewFeedback() {
//     return (
//         <section className="py-20 bg-gray-100 dark:bg-gray-800">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Interviews</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interview with John Doe</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Hear from industry expert John Doe as he shares his insights on the latest trends in software
//                   engineering.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Watch Interview
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interview with Jane Smith</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Learn from Jane Smith's experience as a successful product manager and how she navigated her career.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Watch Interview
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interview with Mark Johnson</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Gain insights from Mark Johnson's experience as a seasoned software engineer and tech lead.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Watch Interview
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// }

"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InterviewFeedback() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black/[0.96] dark:bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
