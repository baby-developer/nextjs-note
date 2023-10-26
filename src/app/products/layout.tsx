import { Metadata } from 'next';
import styles from './layout.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '전체 제품 확인',
  description: '멋진 제품을 확인해 보세요',
};

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
