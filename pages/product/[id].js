import Button from "@/components/Button";
import { CartContex } from "@/components/CartContex";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsImages from "@/components/ProductsImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import { styled } from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 0.9fr;
  gap: 50px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;



export default function ProductPage({ products }) {
    const rupiah = products.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
    const {addProduct} = useContext(CartContex)
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductsImages images={products.images} />
          </WhiteBox>
          <div>
            <Title>{products.title}</Title>
            <p>{products.description}</p>
            <PriceRow>
              <div>{rupiah}</div>
              <div>
                <Button onClick = {() => addProduct(products._id)} primary size="l">
                  <CartIcon />
                  Tambahkan
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const products = await Product.findById(id);
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
