import React, { useState, useEffect, useRef } from "react";
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
 * @returns {JSX.Element} Le composant ListEmployees.
 */
const ListEmployees = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [searchValue, setSearchValue] = useState("");

  /**
   * Gère la recherche d'employés.
   * Met à jour la valeur de recherche dans le state et réinitialise la page actuelle à 0.
   * @param {string} value - La valeur de la recherche dans l'input.
   */
  const handleSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(0);
  };

  /**
   * Filtre  employés en fonction de la valeur de recherche.
   */
  const filteredItems = mockEmployed.filter((employee) => {
    const lastNameLowercase = employee.lastName.toLowerCase();
    const searchValueLowercase = searchValue.toLowerCase();
    return lastNameLowercase.startsWith(searchValueLowercase);
  });

  const displayedCurrentItems = filteredItems.slice(startIndex, endIndex);
  const dataTableContainerRef = useRef(null);
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

  

  useEffect(() => {
    if (dataTableContainerRef.current) {
      // Hauteur de chaque ligne dans la DataTable (ajuster si nécessaire)
      const rowHeight = 50;
      // Calculer la hauteur nécessaire pour afficher le nombre d'éléments spécifié par page
      const requiredHeight = itemsPerPage * rowHeight;
      // Définir la hauteur de l'élément conteneur de la DataTable
      dataTableContainerRef.current.style.height = `${requiredHeight}px`;
    }
  }, [itemsPerPage]);
  return (
    <>
      <section className="list">
        <div className="list__header">
          <h2 className="create__name">HRNet</h2>
          <img className="list__logo" src={logo} alt="logo appli" />
          <h2 className="create__title">List Employee</h2>
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
        {/* Afficher le nombre total d'éléments affichés */}
        <div className="pagination-search__count">
          {Math.min(filteredItems.length, endIndex)}  / {filteredItems.length} salariés
        </div>
      </div>
      <div ref={dataTableContainerRef}>
      <DataTable
        columns={columns}
        data={displayedCurrentItems}
        customStyles={customStyles}
      />
</div>
    </>
  );
};

export default ListEmployees;
