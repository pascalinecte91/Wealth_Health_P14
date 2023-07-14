import React, { useState } from "react";
import logo from "assets/logo_name.png";
import mockEmployed from "data/mockEmployed.js";
import { columns } from "data/column.js";
import Pagination from "components/pagination/Pagination.js";
import DataTable from "react-data-table-component";
import { customStyles } from "components/customDataTable/dataTableStyles.js";
import EmployeeSearch from "components/search/EmployeeSearch.js";



/**
 * @Composant de la liste des employés.
 * Affiche une liste paginée des employés avec possibilité de recherche.
 */
const ListEmployees = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [searchValue, setSearchValue] = useState("");

  /**
   * Gère la recherche d'employés.
   * Met à jour la valeur de recherche dans le state.
   * @param {string} value - La valeur de la recherche dnas l input ex: a
   */
  const handleSearch = (value) => {
    //console.log(value);
    setSearchValue(value);
  };

  /**
   * @methode .filter en fonctio de la valeur de la recherche : searchValue
   * compare les noms et prenoms et met en minuscule, si valeur trouvée il va dans le [filtré]
   * 
   */
  const filteredItems = mockEmployed
    .filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
    )
    /**
     * TRI alphabetique et compare nom et prenom en convertissant en minuscule
     * true ou false ou null si 2 identiques
     */
    .sort((a, b) =>
      a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase())
    );

    // Extrait les employés à afficher 
  const displayedCurrentItems = filteredItems.slice(startIndex, endIndex);
  console.log(displayedCurrentItems);
  
  // pour verifier le statut  de sortable dans l inpecteur
  
  //const lastNameColumn = columns.find((column) => column.selector === "lastName");
  // const isLastNameSortable = lastNameColumn?.sortable ?? true;
  // console.log("Sortable lastName:", isLastNameSortable);
  // console.log("Columns:", columns);
  return (
    <>
      <section className="list">
        <div className="list__header">
          <h2 className="create__name">HRNet</h2>
          <img className="list__logo" src={logo} alt="logo appli" />
          <h2 className="create__title">List Employee</h2>
        </div>
        <EmployeeSearch onSearch={handleSearch} />
      </section>

      <DataTable
        columns={columns}
        data={displayedCurrentItems}
        customStyles={customStyles}
      />

      <Pagination
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        showNextButton={filteredItems.length > endIndex}
      />
    </>
  );
};

export default ListEmployees;
