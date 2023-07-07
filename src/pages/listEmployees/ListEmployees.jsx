import React, { useState } from "react";
import logo from "assets/logo_name.gif";
import mockEmployed from "data/mockEmployed.js";
import { columns } from "data/column.js";
import Pagination from "components/pagination/Pagination.js";
import DataTable from "react-data-table-component";
import { customStyles } from "components/customDataTable/dataTableStyles.js";
import EmployeeSearch from "components/search/EmployeeSearch.js";

const ListEmployees = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const filteredItems = mockEmployed
    .filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) =>
      a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase())
    );

  const displayedCurrentItems = filteredItems.slice(startIndex, endIndex);

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
      />
    </>
  );
};

export default ListEmployees;
