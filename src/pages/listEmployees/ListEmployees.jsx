import React, { useState } from "react";
import logo from "assets/logo_name.gif";
import mockEmployed from "data/mockEmployed.js";
import { columns } from "data/column.js";
import Pagination from "components/pagination/Pagination.js";
import DataTable from "react-data-table-component";
import { customStyles } from "components/dataTableStyles.js";


const ListEmployees = () => {
  // État pour suivre la page actuelle (indexée à partir de 0)
  const [currentPage, setCurrentPage] = useState(0);
  // Nombre d'éléments à afficher par page
  const itemsPerPage = 7;
  // Calculer les index de début et de fin pour les éléments à afficher sur la page actuelle
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // j'extrais les éléments avec .slice pour afficher sur la page  à partir des données mockEmployed
  // Ils sont stockés dans displayedCurrentitems
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

      <DataTable
        columns={columns}
        data={displayedCurrentItems}
        customStyles={customStyles}
       
        
      />
      <Pagination
        pageCount={Math.ceil(mockEmployed.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ListEmployees;
