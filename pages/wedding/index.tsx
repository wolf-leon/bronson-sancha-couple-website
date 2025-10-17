import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const images = [
  "/wedding-3.jpg",
  "/wedding-34.jpg",
  "/wedding-32.jpg",
  "/wedding-33.jpg",
  "/wedding-31.jpg",
  "/wedding-4.jpg",
  "/wedding-5.jpg",
  "/wedding-6.jpg",
  "/wedding-7.jpg",
  "/wedding-8.jpg",
  "/wedding-9.jpg",
  "/wedding-10.jpg",
  "/wedding-12.jpg",
  "/wedding-13.jpg",
  "/wedding-14.jpg",
  "/wedding-15.jpg",
  "/wedding-17.jpg",
  "/wedding-18.jpg",
  "/wedding-19.jpg",
  "/wedding-20.jpg",
  "/wedding-21.jpg",
  "/wedding-23.jpg",
  "/wedding-24.jpg",
  "/wedding-25.jpg",
  "/wedding-26.jpg",
  "/wedding-27.jpg",
  "/wedding-28.jpg",
  "/wedding-29.jpg",
  "/wedding-30.jpg",
  "/wedding-36.jpg",
  "/wedding-37.jpg",
  "/wedding-38.jpg",
  "/wedding-39.jpg",
  "/wedding-40.jpg",
  "/wedding-41.jpg",
  "/wedding-42.jpg",
  "/wedding-45.jpg",
  "/wedding-46.jpg",
  "/wedding-47.jpg",
  "/wedding-48.jpg",
  "/wedding-49.jpg",
  "/wedding-50.jpg",
  "/wedding-11.jpg",
  "/wedding-16.jpg",
  "/wedding-22.jpg",
  "/wedding-35.jpg",
  "/wedding-43.jpg",
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
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 w-full">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image
                alt={`Memories Image ${index + 1}`}
                className="rounded-lg shadow-md"
                src={image}
                width={300}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Romantic Quote Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-50 via-white to-yellow-50 text-center">
        <blockquote className="max-w-3xl mx-auto text-gray-800 italic text-lg md:text-xl">
          &quot;Love doesn&apos;t make the world go round. Love is what makes
          the ride worthwhile.&quot;
        </blockquote>
        <p className="mt-4 text-gray-600 text-base">— Franklin P. Jones</p>
      </section>

      {/* Text Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            Our wedding was a beautiful and memorable day — a celebration filled
            with love, laughter, and the promise of a new beginning together.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            Every moment was special, and each smile told a story. Relive our
            cherished memories by clicking the button below to see more photos
            from our big day.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center items-center mt-6">
          <a
            className="px-6 py-3 text-lg font-semibold text-gray-800 rounded-full text-center"
            href="https://drive.google.com/drive/folders/1-UTF-7rLJc5lu5mK3BrO-WAgf169L-i_"
            style={{
              backgroundColor: "#FAEBD7", // Light butterscotch color
              border: "2px solid #FFF8DC",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              textDecoration: "none", // Ensure no underline
            }}
          >
            More Captures of our Day ✨
          </a>
        </div>
      </section>
      <br />
    </DefaultLayout>
  );
}
