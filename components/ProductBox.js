import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContex } from "./CartContex";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  height: 150px;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 150px;
  }
`;

const Text = styled.h2`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0%;
  color: inherit;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;

export default function ProductBox({
  _id,
  title,
  description,
  images,
  price,
  category,
  properties,
}) {
  const rupiah = price.toLocaleString("id-ID",{ style: 'currency', currency: 'IDR' });
  const { addProduct } = useContext(CartContex);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]}></img>
      </WhiteBox>
      <ProductInfoBox>
        <Text>{title}</Text>
        <PriceRow>
          <Price>{rupiah}</Price>
          <Button onClick={() => addProduct(_id)} primary size="l">
            <CartIcon></CartIcon>
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
