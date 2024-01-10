import  { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const NavsContainer = styled.nav`
  background-color: #149afb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImage = styled.img`
  height: 2rem;
`;

const LogoText = styled.span`
  color: white;
  font-family: "Inter-SemiBold", Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`;
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none; // Removes the underline from the link
`;

const NavLinks = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: white;
  font-family: "Inter-Regular", Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.show ? '0' : '-100%'};
  width: 250px;
  height: 100vh;
  background-color: #149afb;
  padding: 1rem;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.1);
  transition: left 0.3s;
  display: flex;
  flex-direction: column;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

// Main NavBar Component
export const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <NavsContainer>
        <LogoLink to="/"> {/* Link to the homepage */}
          <Logo>
            <LogoImage
              alt="Logo"
              src="https://t4.ftcdn.net/jpg/01/62/42/09/240_F_162420902_nU5hnvuGSCaDy4ja3StuTCYybafONrH0.jpg"
            />
            <LogoText>RUN2gether</LogoText>
          </Logo>
        </LogoLink>
        <ToggleButton onClick={() => setShowSidebar(!showSidebar)}>
          ☰
        </ToggleButton>
        <NavLinks>
          <NavLink href="matcher">Find PartnerRunner</NavLink>
          <NavLink href="signin">Sign in</NavLink>
          <NavLink href="register">Register</NavLink>
          <NavLink href="InfoProfile"><LogoImage src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" /></NavLink>
        </NavLinks>
      </NavsContainer>
      <Sidebar show={showSidebar}>
        <NavLink href="matcher" onClick={() => setShowSidebar(false)}>Find PartnerRunner</NavLink>
        <NavLink href="signin" onClick={() => setShowSidebar(false)}>Sign in</NavLink>
        <NavLink href="register" onClick={() => setShowSidebar(false)}>Register</NavLink>
        <NavLink href="InfoProfile" onClick={() => setShowSidebar(false)}>profile</NavLink>
      </Sidebar>
    </>
  );
};