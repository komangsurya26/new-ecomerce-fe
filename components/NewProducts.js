import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:30px;
  padding-top: 20px;
`;

const Title = styled.h2`
  font-weight: normal;
  margin: 30px 0 20px;
  font-size: 1.5rem
`;
export default function NewProducts({ product }) {
  return (
    <Center>
    <Title>Produk Baru</Title>
      <ProductGrid>
        {product?.length > 0 &&
          product.map((product) => <ProductBox {...product}></ProductBox>)}
      </ProductGrid>
    </Center>
  );
}
