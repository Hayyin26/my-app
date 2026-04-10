import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Products.type";

const halamanProdukServer = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukServer;

// Dipanggil setiap kali halaman diakses — mengambil data dari API sebelum render
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const respone = await res.json();
  // console.log("Data produk yang diambil dari API:", respone);
  return {
    props: {
      products: respone.data, // Pastikan memberikan nilai default jika data tidak tersedia
    },
  };
}