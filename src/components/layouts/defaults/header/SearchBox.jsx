import React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../../../reducers/ui";

const SearchBox = () => {
  const dispatcher = useDispatch();
  const handleSearch = (e) => {
    dispatcher(Actions.searchRequested(e.target.value));
  };
  return (
    <>
      <input
        type="search"
        className="form-control form-control-dark"
        placeholder="Arama..."
        aria-label="Search"
        onKeyUp={(e) => handleSearch(e)}
      />
    </>
  );
};

export default SearchBox;
