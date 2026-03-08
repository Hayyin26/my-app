import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainSection: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
        // Simulasi cek login - ganti dengan logika autentikasi sesungguhnya
        const checkLogin = () => {
            // Misalnya, cek dari localStorage atau API
            const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
            setIsLogin(loggedIn);
            // if (!loggedIn) {
            //     push("/auth/login");
            // }
        };
        checkLogin();
    }, [push]);

    if (!isLogin) {
        return <div>Loading...</div>; // Atau spinner
    }

    return (
        <section className="main py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6">Daftar Produk</h2>
                {/* Tambahkan list produk atau komponen lainnya di sini */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contoh produk */}
                    <div className="product-card bg-white p-4 shadow-md rounded">
                        <h3 className="text-xl font-semibold">Produk 1</h3>
                        <p>Deskripsi produk 1</p>
                    </div>
                    <div className="product-card bg-white p-4 shadow-md rounded">
                        <h3 className="text-xl font-semibold">Produk 2</h3>
                        <p>Deskripsi produk 2</p>
                    </div>
                    <div className="product-card bg-white p-4 shadow-md rounded">
                        <h3 className="text-xl font-semibold">Produk 3</h3>
                        <p>Deskripsi produk 3</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;