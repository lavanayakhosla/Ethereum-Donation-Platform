import React from "react";
import { useNavigate } from "react-router-dom"; 

const NGOs = () => {
  const navigate = useNavigate(); 

  const ngosData = [
    {
      name: "NGO 1",
      photo: "https://www.aahwahan.com/images/about.jpg",
      address: "0x1234567890abcdef123456",
    },
    {
      name: "NGO 2",
      photo: "https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg",
      address: "0x234567890abcdef1234567",
    },
    {
      name: "NGO 3",
      photo: "https://www.aahwahan.com/images/about.jpg",
      address: "0x34567890abcdef1234567",
    },
    {
      name: "NGO 4",
      photo: "https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg",
      address: "0x4567890abcdef",
    },
  ];

  return (
    <section id="ngos" className="py-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Partner NGOs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-6">
        {ngosData.map((ngo, index) => (
          <div key={index} className="bg-white max-w-sm p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={ngo.photo} alt={ngo.name} className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{ngo.name}</h3>
            <p className="text-sm text-gray-600">Ethereum Address: {ngo.address}</p>
    
            <button
              onClick={() => navigate("/ethereum-donation")}
              className="mt-4 w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            >
              Donate
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NGOs;