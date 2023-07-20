import Button from "@/components/Button";
import { CartContex } from "@/components/CartContex";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnssWrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1.2fr 0.9fr;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

const ProductInfoCell = styled.td`
  padding: 20px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  border: 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
`;

const ProvinsiHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const Address = styled.input`
  width: 100%;
  height: 50px;
  padding: flex;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContex);
  const [products, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [regency, setKabupaten] = useState("");
  const [province, setProvinsi] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isSuccess,setIsSuccess] = useState(false);


  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProduct(response.data);
      });
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  function formatCurrency(amount) {
    return amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

    async function goToPayment() {
    const res = await axios.post('/api/checkout', {
        name, email, address, regency, province, postalCode
        ,cartProducts
    });
    if (res.data.url) {
        window.location = res.data.url
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
        <Center>
          <ColumnssWrapper>
            <Box>
              <h1>Pembayaran mu Berhasil 😊🎉</h1>
              <p>Kami akan mengirimkan mu email jika barang sudah sampai 🚛</p>
            </Box>
          </ColumnssWrapper>
        </Center>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnssWrapper>
          <Box>
            <h2>Pesanan</h2>
            {!cartProducts?.length && <div>Ayo Isi Pesanan Mu 🤗</div>}
            {cartProducts?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Produk</th>
                    <th>Jumlah</th>
                    <th>Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.length > 0 && (
                    <>
                      {products.map((product) => (
                        <tr key={product._id}>
                          <ProductInfoCell>
                            <ProductImageBox>
                              <img
                                src={product.images[0]}
                                alt={product.title}
                              />
                            </ProductImageBox>
                            {product.title}
                          </ProductInfoCell>
                          <td>
                            <Button
                              onClick={() => lessOfThisProduct(product._id)}
                            >
                              -
                            </Button>
                            <QuantityLabel>
                              {
                                cartProducts.filter((id) => id === product._id)
                                  .length
                              }
                            </QuantityLabel>
                            <Button
                              onClick={() => moreOfThisProduct(product._id)}
                            >
                              +
                            </Button>
                          </td>
                          <td>
                            {formatCurrency(
                              cartProducts.filter((id) => id === product._id)
                                .length * product.price
                            )}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Total: {formatCurrency(total)}</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </Table>
            )}
          </Box>
          <Box>
            <h2>Informasi Pesanan</h2>
            
              <Input
                name="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                type="text"
                placeholder="Nama"
              />
              <Input
                name="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="text"
                placeholder="Email"
              />
              <Address
                name="address"
                value={address}
                onChange={(ev) => setAddress(ev.target.value)}
                placeholder="Alamat"
                type="text"
              ></Address>
              <ProvinsiHolder>
                <Input
                  name="regency"
                  value={regency}
                  onChange={(ev) => setKabupaten(ev.target.value)}
                  type="text"
                  placeholder="Kabupaten"
                />
                <Input
                  name="province"
                  value={province}
                  onChange={(ev) => setProvinsi(ev.target.value)}
                  type="text"
                  placeholder="Provinsi"
                />
                <Input
                  name="postalCode"
                  value={postalCode}
                  onChange={(ev) => setPostalCode(ev.target.value)}
                  type="text"
                  placeholder="Kode Pos"
                />
              </ProvinsiHolder>
              <input
                name="products"
                type="hidden"
                value={cartProducts.join(",")}
              ></input>
              <Button block onClick={goToPayment} primary size="xl">
                Lanjut Bayar
              </Button>
            
          </Box>
        </ColumnssWrapper>
      </Center>
    </>
  );
}
