import React from 'react';
import ReactPaginate from 'react-paginate';


/**
 * @Composant pour afficher les contrôles de pagination.
 *
 * @param {Object} props - L'objet des propriétés.
 * @param {number} props.pageCount - Le nombre total de pages.
 * @param {number} props.currentPage - Le numéro de la page actuelle (indexé à partir de 0).
 * @param {function} props.onPageChange - La fonction à appeler lorsque la page change.
 */
const Pagination = ({ pageCount, currentPage, onPageChange }) => (
    <ReactPaginate
    pageCount={pageCount}
    pageRangeDisplayed={5}
    marginPagesDisplayed={2}
    onPageChange={({ selected }) => onPageChange(selected)}
    forcePage={currentPage}
    containerClassName="pagination"
    pageClassName="page-item"
    activeClassName="active"
    nextLinkClassName={currentPage === pageCount - 1 ? 'hidden' : ''}
    previousLinkClassName={currentPage === 0 ? 'hidden' : ''}
  />
);

export default Pagination;
  