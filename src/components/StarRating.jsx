import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  // Each star gets a fill % based on rating and star position
  // e.g. rating=4.8 → 4 stars full, 1 star 80% filled

  const stars = Array(5).fill(0);

  return (
    <div className="flex">
      {stars.map((_, i) => {
        // Calculate fill percent for star (0 to 100)
        const fillPercent = Math.min(Math.max(rating - i, 0), 1) * 100;

        return (
          <div
            key={i}
            className="relative w-4 h-4 text-green-600"
            style={{ width: 24, height: 24 }}
          >
            <FaStar className="absolute top-0 left-0 w-4 h-4 text-gray-300" />
            <FaStar
              className="absolute top-0 left-0 w-4 h-4 text-green-600 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - fillPercent}% 0 0)` }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
