import React from 'react'

const ImageItem = ({image}) => {

  return (
    <div>
        <img className='image' src={image.urls.small} alt={image.alt_description} /> {/* image objesindeki resmi alır */}
    </div>
  )
}

export default ImageItem