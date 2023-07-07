import React from 'react';
import ReactPaginate from 'react-paginate';


/**
 * @Composant pour afficher les contrôles de pagination.
 *
 * @param {Object} props - L'objet des propriétés.
 * @param {number} props.pageCount - Le nombre total de pages.
 * @param {number} props.currentPage - Le numéro de la page actuelle (indexé à partir de 0).
 * @param {function} props.onPageChange - appelée lorsque la page change.
 */
const Pagination = ({ pageCount, currentPage, onPageChange }) => (
    <ReactPaginate
    pageCount={pageCount}
    pageRangeDisplayed={5} // affiche 5 pages à la fois
    marginPagesDisplayed={2} // 2 pages au bout
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
  