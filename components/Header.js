import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContex } from "./CartContex";
import BarsIcon from "./icons/BarsIcon";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 0;
`;

const StyleNav = styled.nav`
${props => props.mobileNavActive ? `
display: block;
` : `
display: none;
`}   
gap: 15px;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
padding: 70px 20px 20px;
background-color: #222;
@media screen and (min-width: 768px) {
  display: flex;
  position: static;
  padding: 0;
}
`;
const NavLink = styled(Link)`
display: block;
color:#aaa;
text-decoration:none;
padding: 10px 0;
@media screen and (min-width: 768px) {
  padding:0;
}
`;

const NavButton = styled.button`
background-color: transparent;
width: 30px;
height: 30px;
border:0;
color: white;
cursor: pointer;
position: relative;
z-index: 3;
@media screen and (min-width: 768px) {
  display: none;
}
`;

export default function Header() {
  const { cartProducts } = useContext(CartContex);
  const [mobileNavActive, setMobileNavActive] = useState(false)
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecomerce</Logo>
          <StyleNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Utama</NavLink>
            <NavLink href={"/products"}>Semua Produk</NavLink>
            <NavLink href={"/categories"}>Kategori</NavLink>
            <NavLink href={"/account"}>Akun</NavLink>
            <NavLink href={"/cart"}>Keranjang({cartProducts.length})</NavLink>
          </StyleNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
