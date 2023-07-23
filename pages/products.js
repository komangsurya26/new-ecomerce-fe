import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";



export default function ProductsPage({products}) {
    return (
      <>
        <Header />
        <Center>
          <Title>Semua Produk Kami</Title>
          <ProductGrid products = {products} />
        </Center>

      </>
    );
}

export async function getStaticProps() {
    await mongooseConnect();
    const products = await Product.find({}, null ,{ sort: { '_id': -1 } });
  
    return {
      props: {
        products: JSON.parse(JSON.stringify(products))
      }
    };
  }
  