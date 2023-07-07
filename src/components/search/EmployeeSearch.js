import React, { useState } from "react";
import SearchBox from "react-search-box";

const EmployeeSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="employee-search">
      <label htmlFor="search-input">Recherchez un employé dans la liste</label>
      <SearchBox
        id="search-input"
        placeholder="Entrez les 1ere lettres du prénom ou un nom..."
        value={searchValue}
        onChange={handleSearch}
        className="sc-eDvSVe"
      />
    </div>
  
  );
};

export default EmployeeSearch;
