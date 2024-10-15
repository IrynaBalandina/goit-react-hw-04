import Modal from 'react-modal';
import style from './ImageModal.module.css'

const ImageModal = ({onCloseModal, modalIsOpen, imgForModal,  description}) => {
  return (
   
 
      <Modal
        isOpen={modalIsOpen}
        imgForModal={imgForModal}
        onRequestClose={onCloseModal}
      contentLabel="Image modal"
      className={style.modal}
      overlayClassName={style.overlay}
      >
    
    <img src={imgForModal.src} alt={imgForModal.description} />
        <div>
       
        <p className="">Photo: {description}</p>
        <div>
        <button onClick={onCloseModal}>❌</button>
               

          </div>
          </div>
         
      
      </Modal>
    
  )
}
Modal.setAppElement('#root');
export default ImageModal;