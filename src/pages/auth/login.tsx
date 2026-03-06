import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
  const { push } = useRouter();

  // Navigasi imperatif → ke halaman Produk
  const handlerLogin = () => {
    push("/produk");
  };

  return (
    <div>
      <h1>Halaman Login</h1>

      {/* Navigasi imperatif: Login → Produk */}
      <button onClick={handlerLogin}>Login</button> <br />

      {/* Navigasi deklaratif: Login ↔ Register */}
      <h1>Halaman Register</h1>
      <button onClick = {() => push("/auth/register")}>Register</button>
    </div>
  );
};

export default halamanLogin;
