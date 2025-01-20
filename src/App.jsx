import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";
import { UserProvider } from "./context/UserContext";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { IoMoon, IoSunny } from "react-icons/io5"; 
import Logo from "./components/logo"; 


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.background}; /* Full-page gradient */
    color: ${(props) => props.theme.color}; /* Dynamic font color */
    font-family: 'Courier New', Courier, monospace;
    min-height: 100vh; /* Ensure it spans full height */
    transition: all 0.3s ease; /* Smooth transition for theme changes */
  }
`;


const lightTheme = {
  background:
    "linear-gradient(135deg, #e5e5e5, #d6d6d6, #c8c8c8)", 
  color: "#121212", 
};

const darkTheme = {
  background: "linear-gradient(135deg, #121212, #1f1f1f, #2c2c2c)", 
  color: "#ffffff", 
};

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
  padding-left:190px;
  padding-right:270px;
  position: relative;
  z-index: 1; /* Ensure it is above other elements */
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  svg {
    width: 70px;
    height: 70px;
  }
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${(props) => props.theme.color};
  transition: transform 0.3s ease;
  font-size:2rem;
  &:hover {
    transform: scale(1.1);
  }
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); 

  
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <UserProvider>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <AppContainer>
          <Router>
            <Header>
              <LogoContainer to="/">
                <Logo color={isDarkMode ? "white" : "black"} />
              </LogoContainer>
              <Title>User-Sphere</Title>
              <ThemeToggle onClick={toggleTheme}>
                {isDarkMode ? <IoSunny /> : <IoMoon />}
              </ThemeToggle>
            </Header>

            <Routes>
              <Route
                path="/"
                element={<HomePage isDarkMode={isDarkMode} />} 
              />
              <Route
                path="/user/:id"
                element={<UserDetailPage isDarkMode={isDarkMode} />} 
              />
            </Routes>
          </Router>
        </AppContainer>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
