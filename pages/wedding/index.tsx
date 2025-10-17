import { Image } from "@heroui/image";

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
          Aiz ani Sodakal - Mogan Ami Ravchi
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-700 max-w-xl">
          Celebrating the bond that began with love and continues to blossom
          every day — a journey of togetherness, laughter, and endless memories.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center py-12 px-4">
        <Image
          isBlurred
          alt="Wedding whole picture"
          className="items-center justify-center"
          src="/wedding-2.jpg"
          width={370}
        />
      </section>

      {/* Love Story / Description */}
      <section className="flex flex-col items-center justify-center py-12 px-4 bg-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Forever Together Until Death
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          With hearts full of gratitude and faith, Bronson and Sancha began
          their new journey as one on <strong>January 26th, 2025</strong>.
          Surrounded by the love of family and friends, and with{" "}
          <strong>God&apos;s blessings</strong>, they vowed to cherish, honor,
          and walk beside each other through every season of life. Their wedding
          day marked not just the union of two souls, but the beginning of a
          lifelong promise — to love deeply, live faithfully, and grow together
          under God&apos;s grace.
        </p>
        <blockquote className="mt-6 italic text-pink-700 text-lg">
          “Therefore what God has joined together, let no one separate.”
          <br />
          <span className="text-gray-700 font-medium">— Mark 10:9</span>
        </blockquote>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-r from-pink-100 via-white to-yellow-50 text-center">
          <h1
            className={`${title()} text-3xl md:text-6xl font-cursive text-pink-700`}
          >
            Captured Memories
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
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
