import { memo } from "react";

const StarRating = ({ rating }) => {
  const percentage = (rating / 5) * 100;

  return (
    <div
      className="text-2xl"
      style={{
        background: `linear-gradient(90deg, #84cc16 ${percentage}%, #d1d5db ${percentage}%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      ★★★★★
    </div>
  );
};

export default memo(StarRating);