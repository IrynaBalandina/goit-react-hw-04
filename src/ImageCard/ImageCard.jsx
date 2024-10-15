
const ImageCard = ({image, onOpenImage}) => {

  return (
  
        <div>
  <img 
     key={image.id}
     src={image.urls.small}
     alt={image.alt_description}
     onClick={() => onOpenImage(image.urls.full)}
  
  />
</div>
    
  )
}

export default ImageCard;