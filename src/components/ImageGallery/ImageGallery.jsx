
import ImageCard from "../ImageCard/ImageCard";
import style from './ImageGallery.module.css';

const ImageGallery = ({images, onOpenImage}) => {
  return (
    <ul className={style.list}>
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










