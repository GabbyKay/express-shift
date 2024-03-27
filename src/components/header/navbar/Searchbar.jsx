import React, { useState } from 'react';
import styles from './searchbar.module.css';

function Searchbar() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
    setQuery('');
  };

  const handleSearch = () => {
    console.log(`Search for ${query}`);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      {!expanded && (
        <button className={styles.searchIcon} onClick={handleExpand}>
          <i className="fa fa-search"></i>
        </button> 
      )}
      {expanded && (
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className={styles.input}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </button>
          <button className={styles.closeButton} onClick={handleCollapse}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
