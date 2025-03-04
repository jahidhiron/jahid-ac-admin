import { useTranslation } from "react-i18next";

const Pagination = (props) => {
  const { t } = useTranslation();

  const LEFT_PAGE = "LEFT";
  const RIGHT_PAGE = "RIGHT";
  const LEFT_RANGE = "LEFT_RANGE";
  const RIGHT_RANGE = "RIGHT_RANGE";
  const pageNeighbours = 1;

  const totalPages = props.totalPage;

  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
  };

  const fetchPageNumbers = () => {
    const currentPage = props.currentPage;
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);
      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [1, LEFT_RANGE, ...extraPages, ...pages, totalPages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [1, ...pages, ...extraPages, RIGHT_RANGE, totalPages];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [1, LEFT_RANGE, ...pages, RIGHT_RANGE, totalPages];
          break;
        }
      }

      // return pages;
      return [LEFT_PAGE, ...pages, RIGHT_PAGE];
    }

    return [LEFT_PAGE, ...range(1, totalPages), RIGHT_PAGE];
  };
  const pages = fetchPageNumbers();
  const canPreviousPage = Boolean(props.currentPage !== 1);
  const canNextPage = Boolean(props.currentPage !== props.totalPage);

  return (
    <div className="pagination">
      <div className="pagination-pages">
        {t("rows-per-page")}:
        <div className="select">
          <select
            value={props.pageSize}
            onChange={(e) => {
              props.handlePageSize(e.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

      {props.pageCount.length > 0 ? (
        <div className="pagination-numbers">
          <ul className="pagination justify-content-left mb-0">
            {pages.map((page, index) => {
              if (page === LEFT_RANGE || page === RIGHT_RANGE)
                return (
                  <li key={index} className="page-item disabled">
                    <button className="page-link">...</button>
                  </li>
                );

              if (page === LEFT_PAGE)
                return (
                  <li
                    key={index}
                    className={
                      canPreviousPage ? "page-item" : "page-item disabled"
                    }
                  >
                    <button
                      className="page-link"
                      aria-label="Previous"
                      disabled={Boolean(props.currentPage === 1)}
                      onClick={props.handlePrev}
                      tabIndex="-1"
                    >
                      {t("btn-prev")}
                    </button>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li
                    key={index}
                    className={canNextPage ? "page-item" : "page-item disabled"}
                  >
                    <button
                      className="page-link"
                      aria-label="Next"
                      disabled={Boolean(props.currentPage === props.totalPage)}
                      onClick={props.handleNext}
                      tabIndex="-1"
                    >
                      {t("btn-next")}
                    </button>
                  </li>
                );

              return (
                <li
                  key={index}
                  className={`page-item${
                    props.currentPage === page ? " active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    href="#"
                    onClick={() => props.handlePage(page)}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
