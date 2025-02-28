function SearchHeader({ search }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search("elif");
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz ?</label>
        <input />
      </form>
    </div>
  );
}

export default SearchHeader;
