import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

export default function ProductsLayout({ children }: Props) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
