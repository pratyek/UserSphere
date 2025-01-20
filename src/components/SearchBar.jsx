import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa"; // Search icon

// Styled Components
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  height: auto;
`;

const SortingButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px; /* Spacing between buttons and input */
`;

const SortingButton = styled.button`
  background: ${(props) =>
    props.isDarkMode ? "transparent" : "transparent"}; /* Transparent in both modes */
  border-width: ${(props) => (props.active ? "2px" : "0")}; /* Show border only for active button */
  border-style: solid;
  border-color: ${(props) => (props.isDarkMode ? "white" : "black")}; /* White border for dark mode, black for light mode */
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; /* Text color: white for dark mode, black for light mode */
  border-radius: 5px;
  width: 80px;
  height: 40px;
  cursor: pointer;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.2)" : "#5a5a5a"}; /* Hover: transparent white for dark mode, grey for light mode */
    color: white; /* Text color stays white on hover */
    font-weight: bold;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchIcon = styled.div`
  cursor: pointer;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; /* White in dark mode, black in light mode */
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isDarkMode ? "#1f1f1f" : "white")}; /* Dark background in dark mode, white in light mode */
  border: 2px solid ${(props) => (props.isDarkMode ? "white" : "black")}; /* Border: white for dark mode, black for light mode */
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "#808080"}; /* Slightly transparent for dark, grey for light mode */
    color: white;
  }
`;

const SearchInput = styled.input`
  height: 40px;
  width: ${(props) => (props.expanded ? "250px" : "0px")};
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  background: ${(props) =>
    props.isDarkMode ? "transparent" : "#d3d3d3"}; /* Transparent in dark mode, light grey in light mode */
  border: 2px solid ${(props) => (props.isDarkMode ? "white" : "black")}; /* White border in dark mode, black in light mode */
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; /* White text in dark mode, black in light mode */
  border-radius: 20px;
  padding: 0 10px;
  outline: none;
  font-size: 1rem;
  margin-left: ${(props) => (props.expanded ? "10px" : "0px")};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${(props) => (props.isDarkMode ? "#d3d3d3" : "#808080")};
  }
`;

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  sortOrder,
  setSortOrder,
  isDarkMode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <SearchContainer>
      {/* Sorting Buttons */}
      <SortingButtonsContainer>
        <SortingButton
          isDarkMode={isDarkMode}
          active={sortOrder === "asc"} // Active when sortOrder is "asc"
          onClick={() => setSortOrder("asc")}
        >
          A - Z
        </SortingButton>
        <SortingButton
          isDarkMode={isDarkMode}
          active={sortOrder === "desc"} // Active when sortOrder is "desc"
          onClick={() => setSortOrder("desc")}
        >
          Z - A
        </SortingButton>
      </SortingButtonsContainer>

      {/* Search Bar */}
      <SearchWrapper
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <SearchIcon isDarkMode={isDarkMode}>
          <FaSearch />
        </SearchIcon>
        <SearchInput
          isDarkMode={isDarkMode}
          expanded={isExpanded}
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
