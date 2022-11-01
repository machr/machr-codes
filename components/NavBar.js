import Link from 'next/link'
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <NavLinks>
        <li><Link href="/about">About</Link></li>
      </NavLinks>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
  color: grey;
`;

export default NavBar