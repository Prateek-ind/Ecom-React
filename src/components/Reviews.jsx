import React, { useState } from "react";

const Reviews = () => {
  const [review, setReview] = useState(0);

  const reviews = [
    "This one is for the spice lovers! The Peri Peri flavour hits the right spot – chatpata, not too spicy, and totally addictive. I even carry a pouch in my bag when I travel by train.",
    "I was surprised by how smooth and floral it tasted. It’s become my favorite post-lunch tea – feels like a luxury brew.",
    "I've tried many green teas, but this one stands out! The tulsi aroma is calming and the energy boost is gentle — perfect for my morning routine.",
    "Cheese lovers will be super happy! My kids love this Cheesy Makhana. It’s become a school tiffin regular. And I feel happy giving them something baked and healthy instead of fried snacks.",
    "Simple, light and just the kind of snack you need when you're on a clean-eating routine. I take this to the gym as post-workout munching. Salt level is balanced, and it keeps me full.",
  ];

  const handleNextReview = (index) => {
    setReview(index === reviews.length - 1 ? 0 : index + 1);
  };
  return (
    <section
      className="w-full flex flex-col items-center
     px-4 lg:px-6 xl:px-8 mt-12 font-customFont bg-[#feffec] "
    >
      <div className="flex flex-col items-center text-center w-2/4">
        <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase my-4">
          Loved by snack lovers across India
        </h3>
        <h2 className="text-3xl font-normal tracking-widest text-gray-800 uppercase my-4">
          Voices We Value
        </h2>
        <p className="text-sm font-normal text-gray-800 my-4 leading-6">
          From crunchy cravings to healthy snacking habits — here’s what our
          customers have to say about their favorite Makhana flavors and combos.
          Tried, tasted, and truly enjoyed.
        </p>
        <p className="w-2/3 italic text-xl tracking-wide text-gray-800 font-thin leading-8 my-4">
          "{reviews[review]}"
        </p>
        <div className="flex gap-4 my-4">
          {reviews.map((_, i) => {
            return (
              <button
                className={`w-2 h-2 rounded-full ${
                  review === i ? "bg-gray-700 scale-110" : "bg-gray-400"
                }  `}
                onClick={() => setReview(i)}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
