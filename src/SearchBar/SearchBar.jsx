

const SearchBar = ({onSearch}) => {
  const handleSubmit = (values, actions) => {
     
    onSearch(values.searchTerm);
    actions.resetForm();
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
  </form>
</header>
</>
  )
}

export default SearchBar;