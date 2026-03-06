import { useRouter } from "next/router";

const halamanKategori = () => {
  const { query } = useRouter();
  const slug = Array.isArray(query.slug)
    ? query.slug
    : query.slug
      ? [query.slug]
      : [];

  return (
    <div>
      <h1>Halaman Kategori</h1>
      <p>Kategori: {slug[0]}</p>

      {/* Seluruh parameter URL dalam bentuk list */}
      <ul>
        {slug.map((segment, index) => (
          <li key={index}>
            [{index}] {segment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default halamanKategori;
