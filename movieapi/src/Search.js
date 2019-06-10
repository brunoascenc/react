import React from 'react';

function Search(props) {
  return (
    <div>
      <form action="" onSubmit = {props.handleSearch}>
        <input type="search" onChange = {props.handleChange}/>
        <button onSubmit={props.handleSubmit}> go </button>
      </form>
    </div>
  );
}

export default Search;
