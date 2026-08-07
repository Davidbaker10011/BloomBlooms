import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    console.log("Searching for:", query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search legal resources..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search legal resources"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
