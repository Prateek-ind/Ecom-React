const HeroCarouselButtons = ({index, currentIndex, setCurrentIndex, className}) => {
  return (
    <button className={className} onClick={() => setCurrentIndex(index)}>
      <div className=" w-1 rounded-full border-2 border-gray-400 "></div>
      {index === currentIndex && (
        <div className="absolute inset-0 rounded-full  border-2 border-gray-700 border-t-white animate-spin-slow"></div>
      )}
    </button>
  );
};

export default HeroCarouselButtons;
