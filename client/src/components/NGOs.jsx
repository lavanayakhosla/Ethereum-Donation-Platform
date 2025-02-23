import React from "react";

const NGOs = () => {
  const ngosData = [
    {
      name: "NGO 1",
      photo: "https://www.aahwahan.com/images/about.jpg",
      address: " Wallet Address : 0x1234567890abcde",
    },
    {
      name: "NGO 2",
      photo: "https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg",
      address: "Wallet Address : 0x234567890ab",
    },
    {
      name: "NGO 3",
      photo: "https://www.aahwahan.com/images/about.jpg",
      address: "Wallet Address : 0x34567890ab7",
    },
    {
      name: "NGO 4",
      photo: "https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg",
      address: "Wallet Address: 0x4567890abcdef",
    },
  ];

  return (
    <section id="ngos" className="py-10">
      <h2 className="text-3xl text-center mb-8">Our Partner NGOs</h2>
      <div className="flex flex-wrap justify-center">
        {ngosData.map((ngo, index) => (
          <div key={index} className="max-w-sm m-4 p-6 border rounded-lg shadow-lg">
            <img src={ngo.photo} alt={ngo.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{ngo.name}</h3>
            <p className="text-sm text-gray-500">{ngo.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NGOs;