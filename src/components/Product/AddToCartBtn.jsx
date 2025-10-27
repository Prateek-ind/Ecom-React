import { useState } from "react";

const AddToCartBtn = () => {
  const [cssClasses, setCssClasses] = useState("");

  const triggerAnimation = (animation) => {
    setCssClasses(""); // reset class
    setTimeout(() => setCssClasses(animation), 10); // reapply after a small delay
  };

  return (
    <div
      className="absolute flex items-center justify-center bottom-4 right-4
      w-10 h-10 bg-gray-200 cursor-pointer"
    >
      <button
        onMouseEnter={() => triggerAnimation("animate-spinOnceRight")}
        onMouseLeave={() => triggerAnimation("animate-spinOnceLeft")}
        className={`p-2 text-lg transition-transform ${cssClasses}`}
      >
        +
      </button>
    </div>
  );
};

export default AddToCartBtn;
