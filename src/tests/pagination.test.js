import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "components/pagination/Pagination.js";

describe("Pagination Component", () => {
  it("should render Pagination component correctly", () => {
    const pageCount = 10;
    const currentPage = 0;
    const onPageChange = jest.fn();

    const { getByText } = render(
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    );

    const paginationElement = getByText("1");
    expect(paginationElement).toBeInTheDocument();
  });

  it("should call onPageChange function when page is changed", () => {
    const pageCount = 10;
    const currentPage = 0;
    const onPageChange = jest.fn();

    const { getByText } = render(
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    );

    const thirdPageButton = getByText("3");
    fireEvent.click(thirdPageButton);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
