import React from 'react';
import client from '../sanity/client';
import Link from 'next/link';

const BlogCards = ({ title, description, slug, date }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-8 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">CATEGORY</span>
              <span className="mt-1 text-gray-500 text-sm">{date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
              <p className="leading-relaxed">{description}</p>
              <Link className="text-indigo-500 inline-flex items-center mt-4" href={"blog/"+ slug}>
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = async () => {
  const res = await client.fetch(`*[_type == "blogs"]`);
  console.log(res);
  return (
    <div className="divide-y divide-gray-400">
      {res.map((val) => (
        <BlogCards
          key={val._id}
          title={val.title}
          description={val.description}
          slug={val.slug.current }
          date={val.createdAt}
        />
      ))}
    </div>
  );
};

export default Blog;
