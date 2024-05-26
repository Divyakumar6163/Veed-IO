"use client";

import Link from "next/link";
import styles from "./searchSuggestions.module.css";

const SearchSuggestions = ({ suggestions }) => {
  return (
    <div className={styles.suggestionsContainer}>
      {suggestions.map((suggestion, index) => (
        <Link
          href={`/${suggestion.toLowerCase().replace(" ", "-")}`}
          key={index}
        >
          <a className={styles.suggestionItem}>{suggestion}</a>
        </Link>
      ))}
    </div>
  );
};

export default SearchSuggestions;
