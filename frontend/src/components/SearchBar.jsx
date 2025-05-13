const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <input
      type="text"
      className="p-2 border border-gray-300 rounded w-full mb-4"
      placeholder="🔎 Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
  
  export default SearchBar;
  