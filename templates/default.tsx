import Header from "../components/header";
import type { ReactElement } from 'react'
interface Children{

}

export default function DefaultTemplate({ children }: {children: ReactElement | ReactElement[]} ) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
