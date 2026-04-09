import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  size?: string;
};

const HalamanProduk = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.id) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      setNotFound(false);
      setProduct(null);

      try {
        const res = await fetch('/api/produk');
        const json = await res.json();
        const id = Array.isArray(query.id) ? query.id[0] : query.id;
        const found = json.data.find((item: ProductType) => item.id === id);

        if (!found) {
          setNotFound(true);
        } else {
          setProduct(found);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Gagal memuat produk dari server.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [query.id]);

  if (loading) {
    return <div>Loading produk...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Halaman Produk Server</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (notFound || !product) {
    return (
      <div>
        <h1>Halaman Produk Server</h1>
        <p>Produk dengan ID &quot;{Array.isArray(query.id) ? query.id[0] : query.id}&quot; tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <p>Produk ID: {product.id}</p>
      <h2>{product.name}</h2>
      <p>Kategori: {product.category}</p>
      <p>Harga: Rp {product.price.toLocaleString('id-ID')}</p>
      {product.size && <p>Ukuran: {product.size}</p>}
      {product.image && <img src={product.image} alt={product.name} style={{ maxWidth: 300 }} />}
    </div>
  );
};

export default HalamanProduk;