import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, sortOrder, setSortOrder }) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 search-bar">
      <div className="input-group w-100 w-md-50 mb-3 mb-md-0">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="dropdown ms-md-3">
        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
