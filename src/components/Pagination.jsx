import React from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

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
        ? "#5a5a5a"
        : "#ffffff"
      : props.disabled
      ? "#c8c8c8" 
      : "#2c2c2c"}; 
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
          : "#cccccc"
        : props.disabled
        ? "#c8c8c8"
        : "#5a5a5a"}; 
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
  background-color: ${(props) => (props.active ? "#5a5a5a" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#5a5a5a" : "#555")}; 
  }
`;

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onSwipeNext,
  onSwipePrev,
  isDarkMode, 
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onSwipeNext(),
    onSwipedRight: () => onSwipePrev(),
  });

  if (totalPages <= 1) return null;

  return (
    <PaginationWrapper {...swipeHandlers}>
      <ArrowButton
        isDarkMode={isDarkMode} 
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoChevronBack />
      </ArrowButton>

      <DotsContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot
            key={index}
            active={index + 1 === currentPage}
            onClick={() => onPageChange(index + 1)}
          />
        ))}
      </DotsContainer>

      <ArrowButton
        isDarkMode={isDarkMode} 
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoChevronForward />
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
