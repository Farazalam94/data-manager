/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Styles from "./searchBox.module.css";
const SearchBox = ({ apiData, setFilteredData, setSearch, search }) => {
  useEffect(() => {
    const result = apiData?.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );
    result.length !== 0 ? setFilteredData(result) : setFilteredData(apiData);

  }, [search]);
  const handleSearch = (e) => setSearch(e.target.value);
  return (
    <div className={Styles.container}>
      <input
        className={Styles.input}
        type="text"
        placeholder="Search User"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
