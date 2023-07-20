import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContex } from "./CartContex";

const Bg = styled.div`
  background-color: #000000;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h2`
  font-weight: normal;
  margin: 0;
  font-size: 2rem
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
  
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContex)
  function featuredAddToCart() {
    addProduct(prev => [...prev, product._id])
  }
  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{product.title} 👉</Title>
              <Desc>
                {product.description}
              </Desc>
              <ButtonWrapper >
                <ButtonLink href={'/product/'+ product._id} outline={1} white={1} size="l">
                  📚 Selengkapnya
                </ButtonLink>
                <Button onClick={featuredAddToCart} primary size="l">
                  <CartIcon></CartIcon>
                  Tambahkan
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img src="https://asset.kompas.com/crops/ELqQOvrDHnZimhcDDdzjGDkmHV4=/215x133:1348x888/750x500/data/photo/2021/01/18/6004ff2047534.jpg"></img>
          </Column>
        </ColumnWrapper>
      </Center>
    </Bg>
  );
}
