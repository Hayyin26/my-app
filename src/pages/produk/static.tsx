import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Products.type";

const halamanProdukStatic = (props:{ products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukStatic;

// Dijalankan HANYA saat npm run build — bukan saat request
export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/produk");
  const response: { data: ProductType[] } = await res.json();
  // console.log("Data produk yang diambil dari API:", response);
  return {
    props: {
      products: response.data,
    },
    revalidate: 10,
  };
}