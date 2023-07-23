import { styled } from "styled-components";
import ProductBox from "./ProductBox";

const StyleProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 20px;
`;

export default function ProductGrid({products}) {
  
  return (
    <StyleProductGrid>
      {products?.length > 0 &&
        products.map((product) => <ProductBox key={product._id}{...product}></ProductBox>)}
    </StyleProductGrid>
  );
}
