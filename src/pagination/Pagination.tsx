import { range } from "../utils";

interface PaginationTypes {
 total: number;
 limit: number;
 currentPage: number;
 selectPage?: (page: number) => {};
}

const Pagination = ({ total, limit, currentPage, selectPage }: PaginationTypes) => {
 const pagesCount = Math.ceil(total / limit);
 const pages = range(1, pagesCount + 1);

 return (
  <ul className='pagination'>
   {pages.map((page) => (
    <li
     data-testid='page-container'
     key={page}
     onClick={() => selectPage!(page)}
     className={`page-item ${currentPage === page ? "active" : ""}`}
    >
     <span className='page-link'>{page}</span>
    </li>
   ))}
  </ul>
 );
};

export default Pagination;
