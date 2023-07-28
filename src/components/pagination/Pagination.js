import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({ pageCount, currentPage, onPageChange }) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pageCount - 1;

  const previousLabel = isFirstPage ? <span>{'<'}</span> : '<';
  const nextLabel = isLastPage ? <span>{'>'}</span> : '>';

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2} 
      onPageChange={({ selected }) => onPageChange(selected)}
      forcePage={currentPage}
      containerClassName="pagination"
      pageClassName="page-item"
      activeClassName="active"
      nextLinkClassName={isLastPage ? 'hidden' : ''}
      previousLinkClassName={isFirstPage ? 'hidden' : ''}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
    />
  );
};

export default Pagination;
