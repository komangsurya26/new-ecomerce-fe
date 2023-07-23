import styled from "styled-components";
import Center from "./Center";
import ProductGrid from "./ProductGrid";

const Title = styled.h2`
  font-weight: normal;
  margin: 30px 0 20px;
  font-size: 1.5rem
`;
export default function NewProducts({ products }) {
  return (
    <Center>
    <Title>Produk Baru</Title>
      <ProductGrid products = {products}/>
    </Center>
  );
}
