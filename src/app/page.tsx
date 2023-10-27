import Image from 'next/image';
import styles from './page.module.css';
import os from 'os'; // 노드 APIs (서버 컴포넌트에서 사용 가능)
import Counter from '@/components/Counter';
import path from 'path';

export default function Home() {
  console.log('안녕? - 서버');
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
    </>
  );
}
