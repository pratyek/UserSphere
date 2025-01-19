import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const { users, loading, error } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center text-danger mt-5">{error}</div>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-uppercase">User Directory</h2>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <div className="row gy-4">
        {paginatedUsers.map((user) => (
          <div className="col-md-6 col-lg-4" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
      <Pagination
        totalItems={filteredUsers.length}
        itemsPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default HomePage;
