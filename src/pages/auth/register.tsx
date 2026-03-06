import Link from "next/link";

const halamanRegister = () => {
    return (
      <div>
        <h1>Halaman Register</h1>
        <Link href="/auth/login">
          <button onClick={() => {}}>Ke Halaman Login</button>
        </Link>
      </div>
    );
};

export default halamanRegister;