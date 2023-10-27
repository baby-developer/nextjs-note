import { getProducts } from '@/service/products';
import Link from 'next/link';
import MeowArticle from '../../components/MeowArticle';

// export const revalidate = 3;

export default async function ProductsPage() {
  // 읽어오는 코드를 여기 안에다가 구현해 둔 게 아니라 함수로 추출해 두었음! (getProducts)
  // -> 재사용성을 위해서 & 컴포넌트 UI에 이런 로직을 담아두는 게 별로임 & 나중에 유닛 테스트를 하기도 편함
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
