import style from './ImageCard.module.css';
const ImageCard = ({
  image:{
    alt_description,
    urls:{regular},

  },
   onOpenImage,}) => {
const onClickOpenModal= () => {
  onOpenImage({ alt_description, regular });
};
  return (
  
        <div onClick = {onClickOpenModal}>
  <img 
     
     src={regular}
     alt={alt_description}
    className={style.img}

   
  />
</div>
    
  )
}

export default ImageCard;