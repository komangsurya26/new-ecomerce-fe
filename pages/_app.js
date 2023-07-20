import { CartContexProvider } from "@/components/CartContex";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
body{
  background-color: #eee;
  padding: 0;
  margin:  0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyled />
      <CartContexProvider>
        <Component {...pageProps} />;
      </CartContexProvider>
    </>
  );
}
