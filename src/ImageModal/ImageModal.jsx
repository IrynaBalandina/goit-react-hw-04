import Modal from 'react-modal';


const ImageModal = ({onCloseModal, modalIsOpen, imgForModal, url, description}) => {
  return (
    <div>
      <button onClick={modalIsOpen}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        imgForModal={imgForModal}
        onRequestClose={onCloseModal}
      
        contentLabel="Image modal"
      >
    
       
        <div onClick={onCloseModal}>
        <button onClick={onCloseModal}>❌</button>
        <img src={url} alt={description} />
        <div>
        <p className="">Photo: {description}</p>
               

          </div>
          </div>
         
      
      </Modal>
    </div>
  )
}
Modal.setAppElement('#root');
export default ImageModal;