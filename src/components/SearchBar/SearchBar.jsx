import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';
import style from './SearchBar.module.css';

  
  const SearchBar = ({ onSubmit}) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const form  = e.target;
      const searchImgForm = form.elements.search.value.trim();
  
      if (searchImgForm === "") {
 toast.error("Please, specify your request.", {
        position: "top-right",
      });
      }
  
      onSubmit(searchImgForm);
      form.reset();
    };

  return (
   
    <header className={style.header}>
      
    <form onSubmit={handleSubmit} className={style.form}>
   
      <div>
      <button className={style.btn} type="submit">
            <FaSearch size="18px" />
          </button>
    <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          
</div>
   
  </form>
</header>

  )
}

export default SearchBar;