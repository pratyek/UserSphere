import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #1e1e1e, #2c2c2c)" 
      : "linear-gradient(135deg, #e5e5e5, #d6d6d6, #c8c8c8)"};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#000000")}; 
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  justify-content: space-between; /* Push button to the bottom */
  width: 89%;
  margin: 0 auto; /* Center align the card within the grid */
  border: ${(props) => (props.isDarkMode ? "1px solid #5a5a5a" : "1px solid #000000")}
  position: relative; /* Prevent overflow issues */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    background: ${(props) =>
      props.isDarkMode
        ? "linear-gradient(135deg, #2c2c2c, #3a3a3a)" 
        : "linear-gradient(135deg, #f4f4f4, #eaeaea)"}; 
  }
`;

const CardTitle = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const UserCard = ({ user, isDarkMode }) => {
  return (
    <Link to={`/user/${user.id}`} style={{ textDecoration: "none" }}>
      <Card isDarkMode={isDarkMode}>
        <div>
          <CardTitle>{user.name}</CardTitle>
          <CardText>
            <strong>Email:</strong> {user.email}
          </CardText>
          <CardText>
            <strong>City:</strong> {user.address.city}
          </CardText>
        </div>
      </Card>
    </Link>
  );
};

export default UserCard;
