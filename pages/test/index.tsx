import { TestComponent } from "../../components/test-component";
import DefaultTemplate from "../../templates/default";

export default function TestPage() {
  return (
    <>
    <DefaultTemplate>
      <div>This is a test page</div>
      <TestComponent />
      </DefaultTemplate>
    </>
  );
}
