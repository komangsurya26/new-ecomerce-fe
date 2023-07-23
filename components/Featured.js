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
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  
`;

const ButtonWrapper = styled.div`
display: flex;
gap:10px;
margin-top:25px;
`;

export default function Featured({products}) {
  const {addProduct} = useContext(CartContex)
 
  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{products.title} 👉</Title>
              <Desc>
                {products.description}
              </Desc>
              <ButtonWrapper >
                <ButtonLink href={'/product/'+ products._id} outline={1} white={1} size="l">
                  📚 Selengkapnya
                </ButtonLink>
                <Button onClick={() => addProduct(products._id)} primary size="l">
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
