import styled from "styled-components";
 
// Styled components
const NavsContainer = styled.nav`
  background-color: #149afb;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  height: 30px; // Adjust the size as needed
`;

const LogoText = styled.span`
  color: white;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 60px; // Adjust the gap as needed
  margin-left: 50px; // Adjust the margin as needed
`;

const NavLink = styled.a`
  color: white;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
`;

// Main component
export const NavBar = (): JSX.Element => {
  return (
    <NavsContainer>
      <Logo>

        <LogoImage alt="Star" src="https://t4.ftcdn.net/jpg/01/62/42/09/240_F_162420902_nU5hnvuGSCaDy4ja3StuTCYybafONrH0.jpg" />
        <NavLink href="/">RUN</NavLink>
      </Logo>
      <NavLinks>
        <NavLink href="matcher">find partnerRunner</NavLink>
        <NavLink href="Register">Register</NavLink>
        <NavLink href="signin">Sign in</NavLink>
      </NavLinks>
    </NavsContainer>
  );
};
