import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';

  
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
    <>
    <header>
    <form onSubmit={handleSubmit}>
    <input
            className=''
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
    <button type="submit">Search</button>
    <FaSearch size="18px" />
  </form>
</header>
</>
  )
}

export default SearchBar;