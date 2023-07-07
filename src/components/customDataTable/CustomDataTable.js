import React from "react";
import DataTable from "react-data-table-component";
import { columns } from "data/column.js";

const CustomDataTable = ({ data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
};

export default CustomDataTable;
