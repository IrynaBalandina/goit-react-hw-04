import { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import getPhotos from    "./Api.js";

function App()  { 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [searchImg, setSearchImg] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [imgForModal, setImgForModal] = useState({});

    useEffect(() => {
   async function fetchImages()  {
   try{
      setIsLoading(true);
      const{ data} = await getPhotos(searchImg, page);
      console.log(data);
    }catch (error){
      setIsError(true);
    }finally{
      setIsLoading(false)
    }
  }
  if (searchImg) {
    fetchImages();
  }
}, [page, searchImg]);





  return (
    
      <div>
         <SearchBar/>

       <ImageGallery/>
       <ErrorMessage/>
      
      </div>
     
    
  )
}


export default App;
