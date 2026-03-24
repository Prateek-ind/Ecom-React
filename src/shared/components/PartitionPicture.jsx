import React, { memo } from 'react'

const PartitionPicture = ({mobileSrc, desktopSrc, altText = 'partition image'}) => {
  return (
    <picture>
        <source media='(max-width: 786px)' srcSet={mobileSrc}/>
        <img src={desktopSrc} alt={altText} 
        className='w-full pt-12 bg-[#feffec]'
        loading='lazy'
        decoding='async'
        />
    </picture>
  )
}

export default memo(PartitionPicture)