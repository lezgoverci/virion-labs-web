import Header from '../components/authenticated/header';
import type { ReactElement } from 'react'
interface Children{

}

export default function AuthenticatedTemplate({ children }: {children: ReactElement | ReactElement[]} ) {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
    </>
  );
}
