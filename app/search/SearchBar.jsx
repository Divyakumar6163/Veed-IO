"use client";
import { useState } from "react";
import SearchSuggestions from "./SearchSuggestions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const fetchSuggestions = (searchQuery) => {
    const mockSuggestions = [
      "Auto Subtitles",
      "Clean Audio",
      "Magic Cut",
      "Record",
      "Upload File",
    ].filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
    setSuggestions(mockSuggestions);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search for anything"
        className={styles.searchInput}
      />
      {isFocused && suggestions.length > 0 && (
        <SearchSuggestions suggestions={suggestions} />
      )}
    </div>
  );
};

export default SearchBar;
