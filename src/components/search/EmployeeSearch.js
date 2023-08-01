
import React, { useState } from "react";
import SearchBox from "react-search-box";


const EmployeeSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <label htmlFor="search__text">Recherchez un "employé"</label>
      <SearchBox
        id="search__input"
        placeholder="Entrez les 1ères lettres du nom..."
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default EmployeeSearch;
