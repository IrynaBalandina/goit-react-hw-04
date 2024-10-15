
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({images, onOpenImage}) => {
  return (
    <ul>
	  {images.map((image) => 
    <li key={image.id}>
    <ImageCard
    image={image}
    onOpenImage={onOpenImage}
    />
    </li>
  )}
    </ul>
  )
}

export default ImageGallery;










