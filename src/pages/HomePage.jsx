import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

// Styled Components
const HomeContainer = styled.div`
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardGridWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const CardGrid = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -(props.currentPage - 1) * 100}%);
  gap: 20px; /* Spacing between pages */
  width: 100%;
  
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
  grid-template-rows: auto auto; /* Ensure 2 rows */
  gap: 20px; /* Spacing between cards */
  width: 100%; /* Each page takes full width */
  flex-shrink: 0; /* Prevent shrinking of pages */
  overflow: hidden;
  padding:20px;
`;

const HomePage = ({ isDarkMode }) => {
  const { users, loading, error } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  // Filter and Sort Users
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  // Total Pages Calculation
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Divide Users into Pages
  const pages = [];
  for (let i = 0; i < filteredUsers.length; i += usersPerPage) {
    pages.push(filteredUsers.slice(i, i + usersPerPage));
  }

  // Handle Page Change
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Swipe Handlers for Drag/Swipe Gesture
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextPage,
    onSwipedRight: handlePreviousPage,
    preventScrollOnSwipe: true,
  });

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center text-danger mt-5">{error}</div>;

  return (
    <HomeContainer >
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        isDarkMode={isDarkMode}
      />

      {/* Card Grid with Sliding Animation */}
      <CardGridWrapper {...swipeHandlers}>
        <CardGrid currentPage={currentPage}>
          {pages.map((page, pageIndex) => (
            <PageContainer key={pageIndex}>
              {page.map((user) => (
                <UserCard key={user.id} user={user} isDarkMode={isDarkMode} />
              ))}
            </PageContainer>
          ))}
        </CardGrid>
      </CardGridWrapper>

      {/* Pagination */}
      <Pagination
        totalItems={filteredUsers.length}
        itemsPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        isDarkMode={isDarkMode} 
      />
    </HomeContainer>
  );
};

export default HomePage;
