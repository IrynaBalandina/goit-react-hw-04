import { useState, useEffect } from 'react';

import ImageGallery from './ImageGallery/ImageGallery.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import Loader from './Loader/Loader.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';

import ImageModal from './ImageModal/ImageModal.jsx';
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

   const handleSearch = (newSearch) => {
      setSearchImg(newSearch);
       setImages([]);
       setPage(1);
    };

    const handleLoadMore = () => {
      setPage((prev) => prev + 1);
    };

   
   
    const onOpenImage = (images) => {
      setIsOpen(true);
      setImgForModal(images)
     
    }
    
    const onCloseModal = () => {
      setIsOpen(false);
      setImgForModal(null)
    };
   
    useEffect(() => {
      const onFormSerchSubmit = async () => {
        if (!searchImg) return;
    
      try {
          setIsLoading(true);
          const response = await getPhotos(searchImg, page);
            if(images.length === 0){
              setImages(response.data.results);
            } else {
              setImages(prevImages => [...prevImages, ...response.data.results])
            }
          setTotalPages(response.data.total_pages);
    }
      catch(isError) {
        setIsError(isError);
      } finally {
        setIsLoading(false)
      }
    }
    onFormSerchSubmit()
    }, [searchImg, page])


  return (
    
      <div>
         <SearchBar  onSearch={handleSearch} />
         {isLoading && <Loader />}
          {images.length > 0 && <ImageGallery images={images} onOpenImage={onOpenImage}/>}
          {isError && <ErrorMessage/>}
          {images.length > 0 && page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
       
         {isLoading && <Loader />}
        
         {modalIsOpen && <ImageModal imgForModal={imgForModal} onCloseModal={onCloseModal} modalIsOpen={modalIsOpen}/>}
       
      
            </div>
     
  )
}


export default App;




