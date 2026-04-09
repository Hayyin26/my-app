import { useEffect, useState } from 'react';
import styles from '../../produk/product.module.scss';

type productsType = {
    id: string;
    name: string;
    price: number;
    image?: string;
    category: string;
};

const TampilanProduk = ({ products } : { products: productsType[] }) => {
    return (
        <div className={styles.produk}>
            <h1 className={styles.produk__title}>Daftar Produk</h1>
            {products.length > 0 ? (<div className={styles.produk__content}>
                {products.map((product: productsType) => (
                    <div key={product.id} className={styles.produk__content__item}>
                        <img src={product.image || '/next.svg'} alt={product.name} className={styles.produk__content__item__image} />
                        <h2 className={styles.produk__content__item__name}>{product.name}</h2>
                        <p className={styles.produk__content__item__price}>Rp {product.price.toLocaleString("id-ID")}</p>
                        <p className={styles.produk__content__item__category}>{product.category}</p>
                    </div>
                ))}
            </div>) : (<div className={styles.produk__content__skeleton}>
                <div className={styles.produk__content__skeleton__image}></div>
                <div className={styles.produk__content__skeleton__name}></div>
                <div className={styles.produk__content__skeleton__category}></div>
                <div className={styles.produk__content__skeleton__price}></div>
            </div>)}
        </div>
    );
};

export default TampilanProduk;