import React from 'react'
import ImageItem from './ImageItem'

const ImageList = ({imagesPlaceholder}) => {
  return (
    <div className='imageList'>
        {imagesPlaceholder.map((image, index) => { {/*her bir objenin adı image*/}
           return <ImageItem image={image} key={index}/>
        })}
    </div>
  )
}

export default ImageList