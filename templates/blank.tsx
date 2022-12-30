import type { ReactElement } from 'react'
interface Children{

}

export default function BlankTemplate({ children }: {children: ReactElement | ReactElement[]} ) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
