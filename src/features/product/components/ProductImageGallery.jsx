import React from 'react'

const ProductImageGallery = ({images, selectedImg, onSelectImage }) => {
  return (
    <div className="col-span-2">
        <img src={selectedImg} width='600' height='800' className="px-12" alt="" />
        <div className="flex gap-4 px-12 flex-wrap pt-4">
          {images.map((img, i) => (
            <img
              src={img}
              key={i}
              onClick={() => onSelectImage(img)}
              className={`w-16 h-16 object-cover cursor-pointer border-2 p-0.5 
          ${selectedImg === img ? "border-gray-500" : "border-gray-300"}`}
            />
          ))}
        </div>
      </div>
  )
}

export default ProductImageGallery