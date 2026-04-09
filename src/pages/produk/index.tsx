import { useEffect, useState } from 'react';
import TampilanProduk from '../views/produk';

const kategori = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/produk')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched data:', data);
                setProducts(data.data || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <TampilanProduk products={products} />
        </div>
    );
}

export default kategori;