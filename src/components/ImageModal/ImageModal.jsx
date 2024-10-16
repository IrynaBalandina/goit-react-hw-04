import Modal from 'react-modal';
import style from './ImageModal.module.css';

const ImageModal = ({onCloseModal, modalIsOpen, imgForModal,  alt_description}) => {
  return (
   
 
      <Modal
        isOpen={modalIsOpen}
        imgForModal={imgForModal}
        onRequestClose={onCloseModal}
      contentLabel="Image modal"
      className={style.modal}
      overlayClassName={style.overlay}
      >
    
    <img className={style.imgModal} src={imgForModal.regular} alt={imgForModal.alt_description} />
        <div>
       
        <p className="">Photo: {alt_description}</p>
        <div>
        <button onClick={onCloseModal}>❌</button>
               

          </div>
          </div>
         
      
      </Modal>
    
  )
}
Modal.setAppElement('#root');
export default ImageModal;