import React from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"; // Arrow icons

// Styled Components
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.isDarkMode
      ? props.disabled
        ? "#5a5a5a" // Greyed-out for disabled in dark mode
        : "#ffffff" // White arrows for dark mode
      : props.disabled
      ? "#c8c8c8" // Greyed-out for disabled in light mode
      : "#2c2c2c"}; // Dark arrows for light mode
  font-size: 1.8rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${(props) =>
      props.isDarkMode
        ? props.disabled
          ? "#5a5a5a"
          : "#cccccc" // Light grey hover effect in dark mode
        : props.disabled
        ? "#c8c8c8"
        : "#5a5a5a"}; // Slightly darker hover effect in light mode
    transform: ${(props) => (props.disabled ? "none" : "scale(1.2)")};
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%; /* Circular dots */
  background-color: ${(props) => (props.active ? "#5a5a5a" : "#ccc")}; /* Highlight active dot */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#5a5a5a" : "#555")}; /* Slight hover effect */
  }
`;

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onSwipeNext,
  onSwipePrev,
  isDarkMode, // Add isDarkMode prop
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Swipe Handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onSwipeNext(),
    onSwipedRight: () => onSwipePrev(),
  });

  if (totalPages <= 1) return null;

  return (
    <PaginationWrapper {...swipeHandlers}>
      {/* Left Arrow */}
      <ArrowButton
        isDarkMode={isDarkMode} // Pass isDarkMode to the arrow button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoChevronBack />
      </ArrowButton>

      {/* Dots */}
      <DotsContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot
            key={index}
            active={index + 1 === currentPage}
            onClick={() => onPageChange(index + 1)}
          />
        ))}
      </DotsContainer>

      {/* Right Arrow */}
      <ArrowButton
        isDarkMode={isDarkMode} // Pass isDarkMode to the arrow button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoChevronForward />
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
