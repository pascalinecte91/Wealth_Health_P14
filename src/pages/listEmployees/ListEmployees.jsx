import React, { useState, useEffect } from "react";
import logo from "assets/logo_sans_fond.png";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "data/column.js";
import Pagination from "components/pagination/Pagination.js";
import DataTable from "react-data-table-component";
import { customStyles } from "components/customDataTable/dataTableStyles.js";
import EmployeeSearch from "components/search/EmployeeSearch.js";
import { FaTrashAlt } from "react-icons/fa";
import { clearEmployees } from "redux/actions.js";

/**
 * @Composant pour afficher la liste des employés.
 * @returns {JSX.Element} Liste des employés.
 */
const ListEmployees = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [searchValue, setSearchValue] = useState("");

  const employees = useSelector((state) => state.employees);// new employe create form
  const mockEmployed = useSelector((state) => state.mockEmployed); // mocked

  console.log("employees:", employees);
  console.log("le fichier mock:", mockEmployed);


  /**
   * Gère la recherche d'employés en fonction de la valeur de recherche.
   * @param {string} value - La valeur de recherche.
   */
  const handleSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(0);
  };

  /**
   * Filtre les employés en fonction de la valeur de recherche.
   * @type {Array} Liste des employés filtrés.
   */
  const filteredItems = mockEmployed ? mockEmployed.filter((employee) => {
    const lastNameLowercase = employee.lastName.toLowerCase();
    const searchValueLowercase = searchValue.toLowerCase();
    return lastNameLowercase.startsWith(searchValueLowercase);
  }) : [];

  const allEmployeesSet = new Set([...employees, ...filteredItems]);
  const allEmployees = Array.from(allEmployeesSet);
  // Création d'un nouveau tableau avec lastname Maj
  const allEmployeesCapitalized = allEmployees.map(employee => {
    return {
      ...employee,
      lastName: employee.lastName.charAt(0).toUpperCase() + employee.lastName.slice(1)
    }
  });

  const displayedCurrentItems = allEmployeesCapitalized.slice(startIndex, endIndex);

  // Réinitialise la page actuelle à 0 chaque fois que la valeur de recherche change.
  useEffect(() => {
    setCurrentPage(0);
  }, [searchValue]);


  // Gère le changement du nombre d'éléments par page.
  // @param {Object} event - L'événement de changement.
  const handleItemsPerPageChange = (event) => {
    const { value } = event.target;
    setItemsPerPage(parseInt(value, 10));
    setCurrentPage(0); // Réinitialise la page actuelle lorsque le nombre d'éléments par page est modifié.
  };

  // Gère la suppression de tous les employés.
  const handleClearEmployees = () => {
    dispatch(clearEmployees());
    console.log(clearEmployees);
  };

  // Gérez la mise en page responsive de la DataTable ici
  const responsiveColumns = columns.map((col) => ({
    ...col,
    minWidth: "80px"
  }));
  return (
    <>
      <section className="list">
          <h2 className="list__name">HRNet</h2>
          <img className="list__logo" src={logo} alt="logo appli" width={200} height={170} />
          <div className="list__change">
            <h2 className="list__title">List Employee</h2>
            <button onClick={handleClearEmployees} className="list__delete">  <FaTrashAlt /></button>
          </div>
      </section>

      <section className="pagination-search">
        <div className="pagination-search__toggle">
          <span>Nbre par page : </span>
          <select className="page" value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="pagination-search__lot">
          <Pagination
            pageCount={Math.ceil(allEmployeesCapitalized.length / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}/>
          
          <EmployeeSearch onSearch={handleSearch} />
          <div className="pagination-search__number">
            {Math.min(allEmployeesCapitalized.length, endIndex)}  / {allEmployeesCapitalized.length} salariés
            </div>
        </div>
      </section>

      <DataTable
        columns={responsiveColumns}
        data={displayedCurrentItems}
        customStyles={customStyles}
       
      />
    </>
  );
};

export default ListEmployees;
