import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.scss";

const TampilanRegister = () => {
    const { push } = useRouter();
    const handleRegister = () => {
        push("/login");
    };

    return (
        <div className={styles.register}>
            <h1 className="text-3xl font-bold text-red-600">Halaman Register</h1>
            <button onClick={handleRegister}>Register</button> <br />
            <h1 style={{color:"red", border:"1px solid red", borderRadius:"5px", padding:"10px"}}>Sudah Punya Akun</h1>
            <Link href="/auth/login">
                <button>Login</button>
            </Link>
        </div>
    );
};

export default TampilanRegister;