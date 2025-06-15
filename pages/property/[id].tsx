import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item: typeof PROPERTYLISTINGSAMPLE[number]) => item.name === id);

  if (!property) return <p className="text-center mt-10">Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Property Info and Booking */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Main Detail */}
        <div className="w-full lg:w-2/3">
          <PropertyDetail property={property} />
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Right Column: Booking */}
        <div className="w-full lg:w-1/3">
          <BookingSection property={property} />
        </div>
      </div>
    </div>
  );
}