import React from 'react';

export const Button = ({ description, isCurrentPage, onClick }) => {
  const currentPageStyle = isCurrentPage ? 'bg-blue text-light' : '';
  return (
    <button
      onClick={() => onClick(Number(description))}
      className={`description rounded cursor-pointer  p-0575 mr-1 b-none ${currentPageStyle}`}
    >
      {description}
    </button>
  );
};
