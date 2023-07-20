import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext } from "react";
import { CartContex } from "./CartContex";

const StyledHeader = styled.header`
  background-color: #222;
  padding: 0;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const StyleNav = styled.nav`
  display: flex;
  gap: 15px;
  
`;
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  
`;

export default function Header() {
  const {cartProducts} = useContext(CartContex)
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecomerce</Logo>
          <StyleNav>
            <NavLink href={"/"}>Utama</NavLink>
            <NavLink href={"/products"}>Semua Produk</NavLink>
            <NavLink href={"/categories"}>Kategori</NavLink>
            <NavLink href={"/account"}>Akun</NavLink>
            <NavLink href={"/cart"}>Keranjang({cartProducts.length})</NavLink>
          </StyleNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}
