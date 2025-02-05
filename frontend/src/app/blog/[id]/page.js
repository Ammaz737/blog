 // Ensures the component runs on the client side
import React from 'react';
import { PortableText } from '@portabletext/react';
import client from '@/app/sanity/client';

const BlogContent = async ({ params }) => {
  // Unwrap params using React.use()
  const { id } = await params;

  // Fetch the blog data
  const res = await client.fetch(
    `*[_type == "blogs" && slug.current == "${id}"]{blogDescription}`
  );

  // Ensure there is data before rendering
  if (!res || res.length === 0) {
    return <p>Blog not found.</p>;
  }

  return (
    <div>
      <PortableText value={res[0].blogDescription} />
    </div>
  );
};

export default BlogContent;
