import React from 'react';
import client from '../sanity/client';
import Cards from '../card/page';

const Tutorials = async () => {
  const res = await client.fetch(`*[_type == "tutorials"]`);
  console.log(res);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <h1 className="text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Popular Tutorials
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded text-center mx-auto"></div>
        <div className="flex flex-wrap m-4 -m-10">
          {res.map((val, index) => (
            <Cards
              key={index}
              views={val.views}
              comments={val.comments}
              description={val.description}
              title={val.title}
              image={val.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
