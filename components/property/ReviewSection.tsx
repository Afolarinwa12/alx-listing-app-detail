import React from "react";

interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center mb-2">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-semibold">{review.name}</p>
              <div className="flex items-center text-yellow-500 text-sm">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <span key={i}>☆</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;