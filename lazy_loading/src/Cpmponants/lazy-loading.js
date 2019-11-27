import React, { Suspense, lazy }  from 'react';

const PhotoList = lazy(()=> import('./PhotoList'));

const LazyLoading = (props) => {
    return (
        <Suspense fallback={<div>Loading.......</div>}>
            <PhotoList />
        </Suspense>
    );
  }

  export default LazyLoading;