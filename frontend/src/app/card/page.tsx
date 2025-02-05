import React from 'react';
import Image from 'next/image';
import { urlFor } from '../sanity/client';

interface CardProps {
  views: number;
  comments: number;
  title?: string;  // Made title optional
  description: string;
  image?: { _type: string; asset: { _ref: string } };
}

const Cards: React.FC<CardProps> = ({ views, comments, title, description, image }) => {
  const imageUrl = image?._type && image.asset ? urlFor(image).url() : null;  // Safe check for image

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {imageUrl ? (
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={imageUrl}
            alt={title || 'Tutorial image'}  // If title is empty, fallback to default alt
            width={600}
            height={400}
          />
        ) : (
          <div>No image available</div>
        )}
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Next.js
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap">
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              {views} views
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              {comments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
