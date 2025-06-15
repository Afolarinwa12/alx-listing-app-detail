import React, { useState } from "react";
import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const tabs = ["What we offer", "Reviews", "About host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("What we offer");

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 md:col-span-4 w-full h-96 object-cover rounded-lg"
        />
        {/* You can add static or random extra images for now */}
        <img src={property.image} alt="side1" className="w-full h-48 object-cover rounded-lg" />
        <img src={property.image} alt="side2" className="w-full h-48 object-cover rounded-lg" />
      </div>

      {/* Description + Booking Layout */}
      <div className="flex flex-col lg:flex-row mt-10 gap-8">
        {/* Left Side: Description */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex space-x-4 mb-4 border-b pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-medium ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "What we offer" && (
              <>
                <p className="text-gray-700 mb-4">{property.description}</p>
                <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
                <ul className="flex flex-wrap gap-3">
                  {property.category.map((amenity: string, idx: number) => (
                    <li key={idx} className="bg-gray-200 p-2 rounded-md">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {activeTab === "Reviews" && (
              <ReviewSection reviews={property.reviews} />
            )}

            {activeTab === "About host" && (
              <p className="text-gray-600">This section can include host details (not yet implemented).</p>
            )}
          </div>
        </div>

        {/* Right Side: Booking */}
        <div className="w-full lg:w-[30%]">
          <BookingSection property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;