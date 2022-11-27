import { TestComponent } from "../../components/test-component";
import DefaultTemplate from "../../templates/default";

export default function AboutPage() {
  return (
    <>
      <DefaultTemplate>
        <div>This is the Abouts page</div>
        <TestComponent />
      </DefaultTemplate>
    </>
  );
}
