import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa"; 

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
  margin-bottom: 10px; 
`;

const SortingButton = styled.button`
  background: ${(props) =>
    props.isDarkMode ? "transparent" : "transparent"}; 
  border-width: ${(props) => (props.active ? "2px" : "0")}; 
  border-style: solid;
  border-color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
  border-radius: 5px;
  width: 80px;
  height: 40px;
  cursor: pointer;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.2)" : "#5a5a5a"}; 
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
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isDarkMode ? "#1f1f1f" : "white")}; 
  border: 2px solid ${(props) => (props.isDarkMode ? "white" : "black")}; 
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "#808080"}; 
    color: white;
  }
`;

const SearchInput = styled.input`
  height: 40px;
  width: ${(props) => (props.expanded ? "250px" : "0px")};
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  background: ${(props) =>
    props.isDarkMode ? "transparent" : "#d3d3d3"}; 
  border: 2px solid ${(props) => (props.isDarkMode ? "white" : "black")}; 
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
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
  
      <SortingButtonsContainer>
        <SortingButton
          isDarkMode={isDarkMode}
          active={sortOrder === "asc"} 
          onClick={() => setSortOrder("asc")}
        >
          A - Z
        </SortingButton>
        <SortingButton
          isDarkMode={isDarkMode}
          active={sortOrder === "desc"} 
          onClick={() => setSortOrder("desc")}
        >
          Z - A
        </SortingButton>
      </SortingButtonsContainer>

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
