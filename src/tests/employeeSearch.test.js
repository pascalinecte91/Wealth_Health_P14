import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmployeeSearch from "components/search/EmployeeSearch.js";

describe("EmployeeSearch Component", () => {
  it("should render EmployeeSearch component correctly", () => {
    const onSearch = jest.fn();

    const { getByPlaceholderText } = render(
      <EmployeeSearch onSearch={onSearch} />
    );

    const searchInput = getByPlaceholderText("Entrez les lettres du nom...");

    expect(searchInput).toBeInTheDocument();
  });

  it("should call onSearch function when search value changes", () => {
    const onSearch = jest.fn();

    const { getByPlaceholderText } = render(
      <EmployeeSearch onSearch={onSearch} />
    );

    const searchInput = getByPlaceholderText("Entrez les lettres du nom...");

    fireEvent.change(searchInput, { target: { value: "John" } });

    expect(onSearch).toHaveBeenCalledWith("John");
  });


});
