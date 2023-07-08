import mockEmployed from "data/mockEmployed.js";
import React, { useState } from "react";
import SearchBox from "react-search-box";

const EmployeeSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
    onSearch(value);
  };
  const hasSearchResults = searchValue !== "" && !mockEmployed.some((employee) =>
    employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="search">
      <label htmlFor="search__text">Recherchez un "employé" dans la liste</label>
      <SearchBox
        id="search__input"
        placeholder="Entrez les 1ere lettres du prénom ou un nom..."
        value={searchValue}
        onChange={handleSearch}

      />
   {hasSearchResults && <div className="search__error">Aucun résultat trouvé</div>}
    </div>
   
  
  );
};

export default EmployeeSearch;
