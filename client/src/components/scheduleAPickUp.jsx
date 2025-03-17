import { useState } from "react";

const SchedulePickup = () => {
  const [quantity, setQuantity] = useState(1);
  const items = ["Food Items", "Clothes", "Books", "Toys", "Others"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">Schedule a Pickup</h2>
        <form className="space-y-4">
        <h2 className="text-lg font-bold">Name</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full p-2 border rounded-md"
          />
          <h2 className="text-lg font-bold">Phone</h2>
          <input
            type="text"
            name="phone"
            required
            placeholder="Enter your Phone Number"
            className="w-full p-2 border rounded-md"
          />
           <h2 className="text-lg font-bold"> Address</h2>
          <input
            type="text"
            name="address"
            required
            placeholder="Enter your Address"
            className="w-full p-2 border rounded-md"
          />
          <h2 className="text-lg font-bold">Select the items to donate</h2>
          <select
            name="donation"
            required
            className="w-full p-2 border rounded-md"
          >
            <h2 className="text-lg font-bold">Select the items to donate</h2>
            <option value="" disabled selected>
             
            </option>
            {items.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-3 py-1 bg-gray-300 rounded-md"
            >
             <h2 className="text-lg font-bold">+</h2>
            </button>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value) || 1)}
              className="w-16 text-center border rounded-md"
            />
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 bg-gray-300 rounded-md"
            >
             <h2 className="text-lg font-bold">+</h2>
            </button>
          </div>
          <h2 className="text-lg font-bold">Upload the photo of items</h2>
          <input
            type="file"
            name="photoUpload"
            accept="image/*"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="datetime-local"
            name="pickupTime"
            required
            className="w-full p-2 border rounded-md"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700"
            >
              Schedule a Pickup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SchedulePickup;