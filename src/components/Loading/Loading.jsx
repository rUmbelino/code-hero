import React from 'react';

import loading from './assets/loading.gif';

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={loading} alt="loading gif" />
    </div>
  );
};
