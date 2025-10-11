"use client";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const prompt = "Define the Love Story of Bronson and Sancha.";
const words = `
On Sancha's 21st birthday, Bronson and Sancha realized their love for each other and decided they were made for each other. It was their time, and they were officially engaged. From that day onwards, they began their journey of making memories, exploring new places, sharing adventures, and building a life together filled with love, joy, and endless possibilities. Their story is one of love, commitment, and the beautiful journey of two souls destined to be together. The future awaits them with new possibilities, ready to embrace all the dreams and adventures that lie ahead.
`;

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6">
        <div className="w-full md:w-3/4 lg:w-1/2 text-center mb-4">
          <div
            className="inline-block px-6 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)",
            }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive">
              Chronicles of Love: A Tale Unfolds
            </h1>
          </div>
        </div>
        <div className="w-full md:w-3/4 ">
          <div className="bg-blue-100 text-blue-800 font-semibold py-4 px-6 rounded-full text-center mb-4 text-lg">
            {prompt}
          </div>
          <div className="bg-blue-100 text-blue-800 font-semibold py-4 px-6 rounded-lg text-center mb-4 text-lg">
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </section>

      <Divider className="my-4" />

      {/* Civil Signature Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6 relative">
        <div className="w-full md:w-3/4 lg: text-center my-8">
          <div
            className="inline-block px-6 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)",
            }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive ">
              A New Chapter Begins: Our Civil Marriage
            </h1>
          </div>
        </div>
        <Image
          isBlurred
          alt="Sign picture"
          className="items-center justify-center"
          src="/sign-1.jpg"
          width={370}
        />
      </section>

      {/* Text Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            On a quiet yet profoundly meaningful day, we stood together to sign
            the papers that would mark the beginning of our shared journey as a
            married couple. It wasn&apos;t about the grandeur or a big
            celebration; it was about the simplicity of love and commitment.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            With each signature, we felt the weight of our promises, the joy of
            our union, and the excitement of building a life together. This was
            our civil marriage—a day that was intimate, official, and deeply
            personal. It&apos;s a memory we&apos;ll forever cherish, not for its
            extravagance, but for its authenticity and heartfelt significance.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center items-center mt-6">
          <a
            className="px-6 py-3 text-lg font-semibold text-gray-800 rounded-lg text-center"
            href="/civil-signature"
            style={{
              backgroundColor: "#FAEBD7", // Light butterscotch color
              border: "2px solid #FFF8DC",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              textDecoration: "none", // Ensure no underline
            }}
          >
            Relive the Moments That Made Our Day Special Here
          </a>
        </div>
      </section>

      <Divider className="my-4" />

      {/* New Section with Image and Text */}
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6 relative">
        <div className="w-full md:w-3/4 lg: text-center my-8">
          <div
            className="inline-block px-6 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)",
            }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive ">
              Love Unveiled: The Endless Journey of Bronson & Sancha
            </h1>
          </div>
        </div>
        <Image
          isBlurred
          alt="Bronson and Sancha"
          className="items-center justify-center"
          src="/hero.jpg"
          width={800}
        />
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            Captured in that moment, their smiles radiate a promise of a future
            filled with endless joy and shared adventures.In a single frame,
            their love blooms, a testament to the beauty of two souls
            intertwined.
          </p>
        </div>
      </section>

      <Divider className="my-4" />

      {/* Section 2 */}
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6 relative">
        <div className="w-full md:w-3/4 lg: text-center my-8">
          <div
            className="inline-block px-6 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)",
            }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive ">
              Families: Uniting Together
            </h1>
          </div>
        </div>
        <Image
          isBlurred
          alt="Family picture"
          className="items-center justify-center"
          src="/family.jpg"
          width={800}
        />
      </section>

      {/* Text Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            In this beautiful moment captured forever, we see not just two
            people who have found their soulmate, but two families coming
            together in celebration. The smiles and joy radiate through the
            picture, illustrating the strong bonds and deep connections that
            have formed. Bronson and Sancha&apos;s engagement marks the
            beginning of a new chapter where two worlds merge into one.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            This photograph is a symbol of unity, marking the start of their
            journey together. Their engagement is a commitment that extends to
            their families and friends, creating a future filled with endless
            possibilities. Surrounded by love and support, Bronson and Sancha
            are ready to embrace all the dreams and adventures that lie ahead.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
