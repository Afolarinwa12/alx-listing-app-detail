import React, { useState } from "react";
import { PropertyProps } from "@/interfaces";

const BookingSection: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = (): number => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const total = nights * property.price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800">${property.price} <span className="text-sm text-gray-600">/ night</span></h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-1 rounded-md"
        />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-1 rounded-md"
        />
      </div>

      {/* Total */}
      <div className="mt-4 text-gray-700">
        <p>Total payment: <strong>${total}</strong></p>
        {nights > 0 && <p className="text-sm text-gray-500">({nights} nights)</p>}
      </div>

      {/* Button */}
      <button
        disabled={nights <= 0}
        className={`mt-4 w-full py-2 rounded-md text-white font-medium transition ${
          nights > 0 ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;