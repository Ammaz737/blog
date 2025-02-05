import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cards from './card/page';
import Testimonial from './component/testimonial';

export default function Page() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="animate-bounce title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Crafting Innovative <br /> Web Solutions with Passion!
            </h1>
            <p className="mb-8 leading-relaxed">
              Hi, I&apos;m Muhammad Ammaz, a passionate front-end developer and software engineer creating modern, interactive web experiences. Let&apos;s build something amazing together!
            </p>
            <div className="flex justify-center">
              <Link href="/tutorials">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Tutorials
                </button>
              </Link>
              <Link href="/blog">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Blogs
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/img.jpeg"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      <Cards views={0} comments={0} title="Sample Title" description="Sample Description" />
      <div>
        <Testimonial />
      </div>
    </>
  );
}
