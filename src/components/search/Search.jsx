import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.divSearch}>
      <form>
        <input type="text" name="search" id="search" />
      </form>
    </div>
  );
};

export default Search;
