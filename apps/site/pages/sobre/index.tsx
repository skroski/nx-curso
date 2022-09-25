import { GetStaticProps } from 'next';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface SobreProps {
  name: string;
}

export function Sobre({ name }: SobreProps) {
  return (
    <div className={styles['container']}>
      <h1 className="text-red-900 text-4xl">Bem Vindo a página sobre { name }!</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<SobreProps> = async (context) =>{
  return {
    props: {
      name: 'Daniel',
    }
  }
}


export default Sobre;
