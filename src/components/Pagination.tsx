interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let page = Number(e.target.value);
    if (page >= 1 && page <= totalPages) onPageChange(page);
  };

  return (
    <div className="pagination">
      <input
        className="pagination-input"
        type="number"
        value={currentPage}
        onChange={handlePageInput}
        min="1"
        max={totalPages}
      />

      <button
        className="pagination-btn"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Назад
      </button>

      <button
        className="pagination-btn"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Вперед
      </button>
      <span>
        страница {currentPage} из {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
