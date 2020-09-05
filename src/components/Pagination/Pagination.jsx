import React from 'react';

import { Consumer } from '../StateManager';
import { Button } from './Button';
import { getButotns } from './paginationController';

export const Pagination = () => {
  return (
    <div className='d-flex justify-content-center my-1'>
      <Consumer>
        {({ currentPage, setCurrentPage, characters: { total } }) => {
          return getButotns({ total, currentPage }).map((description) => {
            const isCurrentPage = currentPage === Number(description);

            return (
              <div key={`${description}-button`} className='page-item'>
                <Button
                  total={total}
                  description={description}
                  currentPage={currentPage}
                  isCurrentPage={isCurrentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            );
          });
        }}
      </Consumer>
    </div>
  );
};
