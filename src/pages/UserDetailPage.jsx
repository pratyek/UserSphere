import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import { IoArrowBackSharp } from "react-icons/io5"; 

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh; 
  color: ${(props) => props.isDarkMode ? "#ffffff" : "#121212"}; 
  padding: 20px;
  transition: all 0.3s ease;
`;

const DetailCard = styled.div`
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #1e1e1e, #2c2c2c)" 
      : "linear-gradient(135deg, #e5e5e5, #d6d6d6, #c8c8c8)"};
  color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#121212")}; 
  padding: 40px;
  border-radius: 15px;
  border: ${(props) =>
    props.isDarkMode ? "1px solid #5a5a5a" : "1px solid #000000"}; 
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0px 6px 16px rgba(0, 0, 0, 0.5)" 
      : "0px 6px 16px rgba(200, 200, 200, 0.5)"}; 
  max-width: 700px;
  width: 100%;
  text-align: left;
  transition: all 0.3s ease;
`;

const BackButton = styled.button`
  position: relative;
  top: 0px;
  left: 0px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  padding: 10px;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#121212")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${(props) => (props.isDarkMode ? "#5a5a5a" : "#808080")}; 
    transform: scale(1.1);
  }
`;

const CardHeader = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: bold;
`;

const CardDetail = styled.p`
  margin-bottom: 15px;
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#121212")}; 
`;

const BoldLabel = styled.span`
  font-weight: bold;
`;

const UserDetailPage = ({ isDarkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found!</p>;

  return (
    <DetailContainer isDarkMode={isDarkMode}>
      <DetailCard isDarkMode={isDarkMode}>
        {/* Back Button */}
        <BackButton isDarkMode={isDarkMode} onClick={() => navigate(-1)}>
          <IoArrowBackSharp />
        </BackButton>

        {/* Heading */}
        <CardHeader>{user.name}</CardHeader>

        {/* Details */}
        <CardDetail isDarkMode={isDarkMode}>
          <BoldLabel>Email:</BoldLabel> {user.email}
        </CardDetail>
        <CardDetail isDarkMode={isDarkMode}>
          <BoldLabel>Phone:</BoldLabel> {user.phone}
        </CardDetail>
        <CardDetail isDarkMode={isDarkMode}>
          <BoldLabel>Company:</BoldLabel> {user.company.name}
        </CardDetail>
        <CardDetail isDarkMode={isDarkMode}>
          <BoldLabel>Website:</BoldLabel>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
            style={{
              color: isDarkMode ? "#007bff" : "#0056b3",
            }}
          >
            {user.website}
          </a>
        </CardDetail>
      </DetailCard>
    </DetailContainer>
  );
};

export default UserDetailPage;
