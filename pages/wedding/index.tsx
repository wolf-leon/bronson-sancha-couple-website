import Image from "next/image";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
];

export default function WeddingPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-r from-pink-100 via-white to-yellow-50 text-center">
        <h1
          className={`${title()} text-4xl md:text-6xl font-cursive text-pink-700`}
        >
          Bronson & Sancha
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-700 max-w-xl">
          Join us as we celebrate the beautiful journey of love, laughter, and
          forever.
        </p>
      </section>

      {/* Love Story / Description */}
      <section className="flex flex-col items-center justify-center py-12 px-4 bg-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Our Story
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          On Sancha&apos;s 21st birthday, Bronson and Sancha realized their love
          for each other and decided they were made for each other. From that
          day, they began a journey of making memories, exploring new places,
          sharing adventures, and building a life together filled with love,
          joy, and endless possibilities. Today, they are united in marriage,
          ready to write new chapters together, hand in hand, forever.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-8">
          Memories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                fill
                alt={`Wedding memory ${idx + 1}`}
                className="object-cover hover:scale-105 transition-transform duration-300"
                src={img}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Romantic Quote Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-50 via-white to-yellow-50 text-center">
        <blockquote className="max-w-3xl mx-auto text-gray-800 italic text-lg md:text-xl">
          &quot;Together is a beautiful place to be. Our love story is just the
          beginning of forever.&quot;
        </blockquote>
      </section>
    </DefaultLayout>
  );
}
