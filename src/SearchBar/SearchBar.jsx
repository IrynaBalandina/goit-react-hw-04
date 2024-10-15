import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';

  
  const SearchBar = ({ onSearch}) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const searchImg = e.currentTarget.elements.search.value.trim();
  
      if (searchImg === "") {
       return toast.error("Please, specify your request.", {
        position: "top-right",
      });
      }
  
      onSearch(searchImg);
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