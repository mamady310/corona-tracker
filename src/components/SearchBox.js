import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='searching'
        type='search'
        placeholder='search countries'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;