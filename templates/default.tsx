import Header from "../components/header";
import type { ReactElement } from "react";

import Foot from "../components/foot";
interface Children {}

export default function DefaultTemplate({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <>
      <Header />
      {children}
      <Foot />
    </>
  );
}
