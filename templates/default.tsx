import Header from "../components/header";
import type { ReactElement } from 'react'
import Head from "../components/head";
interface Children{

}

export default function DefaultTemplate({ children }: {children: ReactElement | ReactElement[]} ) {
  return (
    <>
      <Head/>
      <Header />
      <main>{children}</main>
    </>
  );
}
