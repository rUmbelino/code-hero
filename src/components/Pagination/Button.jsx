import React from 'react';
import { getPageValue } from './paginationController';

export const Button = ({
  total,
  description,
  currentPage,
  isCurrentPage,
  setCurrentPage,
}) => {
  const currentPageStyle = isCurrentPage ? 'bg-blue text-light' : '';

  return (
    <button
      onClick={() =>
        setCurrentPage(getPageValue({ total, description, currentPage }))
      }
      className={`description rounded cursor-pointer  p-0575 mr-1 b-none ${currentPageStyle}`}
    >
      {description}
    </button>
  );
};
