import React, { useState } from "react";
import logo from "assets/logo_name.gif";
import mockEmployed from "data/mockEmployed.js";
import { columns } from "data/column.js";
import Pagination from "components/pagination/Pagination.js";

/**
 * @Composant pour afficher une liste d'employés avec pagination.
 */
const ListEmployees = () => {
  // État pour suivre la page actuelle (indexée à partir de 0)
  const [currentPage, setCurrentPage] = useState(0);
  // Nombre d'éléments à afficher par page
  const itemsPerPage = 10;
    // Calculer les index de début et de fin pour les éléments à afficher sur la page actuelle
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // méthode slice pour extraire les éléments à afficher sur la page  à partir des données mockEmployed
  const displayedCurrentItems = mockEmployed.slice(startIndex, endIndex); //spécifie l’intervalle des éléments à extraire.

  return (
    <>
      <section className="list">
        <div className="list__header">
          <h2 className="create__name">HRNet</h2>
          <img className="list__logo" src={logo} alt="logo appli" />
          <h2 className="create__title">List Employee</h2>
        </div>
      </section>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.name}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedCurrentItems.map((row) => (
            <tr key={row.firstName}>
              {columns.map((column) => (
                <td key={column.name}>{column.selector(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pageCount={Math.ceil(mockEmployed.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ListEmployees;
