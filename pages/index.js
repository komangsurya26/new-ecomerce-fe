import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ featuredProduct, newProduct }) {
  return (
    <div>
      <Header />
      <Featured products ={featuredProduct}></Featured>
      <NewProducts products ={newProduct}></NewProducts>
    </div>
  );
}

export async function getStaticProps() {
  const featuredProductId = "64b01a93384bf3af805403c8";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProduct = await Product.find({},null, {sort: {'_id':-1}, limit: 10})
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProduct: JSON.parse(JSON.stringify(newProduct))
    },
  };
}
