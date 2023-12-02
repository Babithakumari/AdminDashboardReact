
const Pagination = ({ nPages, currentPage, updatePage }) => {
    // array to denote pagenumbers
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const prev = "<"
    const next = ">"
    const first = "<<"
    const last = ">>"
  
    // function handler to go to first page
    const nextPage = () => {
      if (currentPage !== nPages) {
        updatePage(currentPage + 1);
      }
    };
  
    // function handler to go to last page
    const prevPage = () => {
      if (currentPage !== 1) {
        updatePage(currentPage - 1);
      }
    };
    return (
      <footer>
        <ul className="page-list">
          <li>
            <button className="page-item" onClick={() => updatePage(1)} disabled={currentPage===1}>
              {first}
            </button>
          </li>
          <li>
            <button className="page-item" onClick={() => prevPage()} disabled={currentPage===1}>
              {prev}
            </button>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li>
              <button className="page-item" onClick={() => updatePage(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
          <li>
            <button className="page-item" onClick={() => nextPage()} disabled={currentPage===nPages}>
              {next}
            </button>
          </li>
          <li>
            <button className="page-item" onClick={() => updatePage(nPages)} disabled={currentPage===nPages}>
              {last}
            </button>
          </li>
        </ul>
      </footer>
    );
  };
  
export default Pagination