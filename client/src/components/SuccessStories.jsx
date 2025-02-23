import React from 'react';

const successStories = [
  {
    id: 1,
    title: "Helping Build a School",
    description: "Thanks to your generous donations, we were able to build a school in a rural area, providing education to over 300 children.",
    image: "https://www.jstngo.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-29-at-32601-PM.jpg",
  },
  {
    id: 2,
    title: "Providing Clean Water",
    description: "With your support, we installed clean water systems in remote villages, improving the health of thousands of families.",
    image: "https://thekhaitanschool.org/wp-content/uploads/2023/05/20230512_112130.jpg",
  },
  {
    id: 3,
    title: "Medical Aid to Families in Need",
    description: "Your donations helped deliver medical aid to families affected by natural disasters, saving countless lives and providing relief.",
    image: "https://thekhaitanschool.org/wp-content/uploads/2023/05/IMG-20230512-WA0057.jpg",
  },
];

function SuccessStories() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-12">Success Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {successStories.map((story) => (
          <div key={story.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img src={story.image} alt={story.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-600 mb-4">{story.title}</h2>
              <p className="text-gray-700">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
