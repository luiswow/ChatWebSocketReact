import Pagination from "react-js-pagination";

import { useState } from "react";
function Paginator(props: any) {
  const [currentPage, setCurrentPage] = useState(1);
  // total records per page to display
  const recordPerPage = props.postsPerPage;
  // total number of the records
  const totalRecords = props.totalPosts;
  // range of pages in paginator
  const pageRange = 3;
  // handle change event
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
    props.onChangepage(pageNumber);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="page-pagination">
        <Pagination
          itemClass="ml-3"
          prevPageText={
            <>
              <i
                style={{ marginLeft: 10, marginRight: 10 }}
                className="fa fa-arrow-left"
                aria-hidden="true"
              ></i>
            </>
          }
          nextPageText={
            <i
              style={{ marginLeft: 10, marginRight: 10 }}
              className="fa fa-arrow-right"
              aria-hidden="true"
            ></i>
          }
          firstPageText={
            <>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </>
          }
          lastPageText={
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          }
          activePage={currentPage}
          itemsCountPerPage={recordPerPage}
          totalItemsCount={totalRecords}
          pageRangeDisplayed={pageRange}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
export default Paginator;
