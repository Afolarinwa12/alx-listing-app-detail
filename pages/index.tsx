import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component for optimization
import Layout from '../components/layout/Layout';
import Pill from '../components/Pill';
import { HERO_BACKGROUND_IMAGE } from '../constants/images'; // Import your background image constant

// --- Sample Data ---
// In a real application, PROPERTY_LISTING_SAMPLE would likely come from an API or a separate data file.
const PROPERTY_LISTING_SAMPLE = [
  {
    id: '1',
    name: 'Luxury Downtown Apartment',
    image: '/properties/apt1.jpg', // Placeholder image path in public directory
    price: 250, // Price per night/unit
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Cozy Countryside Cottage',
    image: '/properties/cottage1.jpg',
    price: 180,
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Modern City Loft',
    image: '/properties/loft1.jpg',
    price: 300,
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Spacious Beach Villa',
    image: '/properties/villa1.jpg',
    price: 450,
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Charming Lakeside Cabin',
    image: '/properties/cabin1.jpg',
    price: 160,
    rating: 4.3,
  },
  {
    id: '6',
    name: 'Elegant Penthouse Suite',
    image: '/properties/penthouse1.jpg',
    price: 500,
    rating: 5.0,
  },
];

// Ensure you have placeholder images in your public directory, e.g.:
// public/properties/apt1.jpg
// public/properties/cottage1.jpg
// etc.

const HomePage: React.FC = () => {
  const filterLabels = [
    'Top Villa',
    'Self Checkin',
    'New Arrivals',
    'Pet Friendly',
    'Beachfront',
    'Mountain View',
    'With Pool',
  ];

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (label: string) => {
    setActiveFilter(prevActiveFilter => (prevActiveFilter === label ? null : label));
    // In a real application, you'd apply filtering logic here
    console.log(`Filter clicked: ${label}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text readability */}
        <div className="z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Explore by Filters</h2>
        <div className="flex flex-wrap gap-3">
          {filterLabels.map((label) => (
            <Pill
              key={label}
              label={label}
              isActive={activeFilter === label}
              onClick={handleFilterClick}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTY_LISTING_SAMPLE.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={property.image}
                  alt={property.name}
                  layout="fill" // Use fill to cover the parent div
                  objectFit="cover" // Cover the area without distortion
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                  {property.name}
                </h3>
                <p className="text-gray-700 text-lg font-bold mb-2">
                  ${property.price} <span className="text-sm font-normal text-gray-500">/ night</span>
                </p>
                <div className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.729c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  <span>{property.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;