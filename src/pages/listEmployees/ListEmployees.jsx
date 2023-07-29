import React, { useState, useEffect } from "react";
import logo from "assets/logo_name.png";
import { useDispatch } from "react-redux";
import { columns } from "data/column.js";
import Pagination from "components/pagination/Pagination.js";
import DataTable from "react-data-table-component";
import { customStyles } from "components/customDataTable/dataTableStyles.js";
import EmployeeSearch from "components/search/EmployeeSearch.js";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const ListEmployees = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [searchValue, setSearchValue] = useState("");

  const employees = useSelector((state) => state.employees);
  const mockEmployed = useSelector((state) => state.mockEmployed); 
  
  console.log("employees:", employees);
  console.log("le fichier mock:", mockEmployed);

  const handleSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(0);
  };

  /**
   * Filtre  employés en fonction de la valeur de recherche.
   */
  const filteredItems = mockEmployed ? mockEmployed.filter((employee) => {
    const lastNameLowercase = employee.lastName.toLowerCase();
    const searchValueLowercase = searchValue.toLowerCase();
    return lastNameLowercase.startsWith(searchValueLowercase);
  }) : [];
  
  const allEmployeesSet = new Set([...employees, ...filteredItems]);
  const allEmployees = Array.from(allEmployeesSet);
  const displayedCurrentItems = allEmployees.slice(startIndex, endIndex);

  /**
   * Réinitialise la page actuelle à 0 chaque fois que la valeur de recherche change.
   */
  useEffect(() => {
    setCurrentPage(0);
  }, [searchValue]);

  const handleItemsPerPageChange = (event) => {
    const { value } = event.target;
    setItemsPerPage(parseInt(value, 10));
    setCurrentPage(0); // Réinitialise la page actuelle lorsque le nombre d'éléments par page est modifié.
  };

  const handleClearEmployees = () => {
    dispatch({ type: "CLEAR_EMPLOYEES" });
  };

  return (
    <>
      <section className="list">
        <div className="list__header">
          <h2 className="create__name">HRNet</h2>
          <img className="list__logo" src={logo} alt="logo appli" />
          <div className="list__change">
          <h2 className="create__title">List Employee</h2>
          <button onClick={handleClearEmployees} className="delete">  <FaTrashAlt /></button></div>
        </div>

      </section>

      <div className="pagination-search">
        <div className="pagination-search__toggle">
          <span>Nbre par page : </span> 
          <select className="page" value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
       
        <Pagination
          pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
         
        <EmployeeSearch onSearch={handleSearch} />
        <div className="pagination-search__count">
          {Math.min(allEmployees.length, endIndex)}  / {allEmployees.length} salariés  
         
        </div>
       
      </div>
      <DataTable
        columns={columns}
        data={displayedCurrentItems}
        customStyles={customStyles}
      />
    </>
  );
};

export default ListEmployees;
