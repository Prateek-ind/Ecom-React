const HeroShopButton = ({ currentIndex }) => {
  if (currentIndex === 1) {
    return <button
      className=" absolute z-10 top-70 right-50 px-16 py-2 font-lg
         font-customFont text-[#80ad53] border border-[#80ad53] bg-white hover:scale-105
         transition-all duration-500 hover:bg-gradient-to-l hover:from-white hover:to-transparent"
    >
      Shop
    </button>;
  }
  else{
    return  <button
      className=" absolute z-10 right-12 bottom-12 px-16 py-2 font-lg
         font-customFont text-[#80ad53] border border-[#80ad53] bg-white hover:scale-105
         transition-all duration-500 hover:bg-gradient-to-l hover:from-white hover:to-transparent"
    >
      Shop
    </button>
  }
  
};

export default HeroShopButton;
