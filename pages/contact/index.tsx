import { TestComponent } from "../../components/test-component";
import DefaultTemplate from "../../templates/default";

export default function ContactsPage() {
  return (
    <>
      <DefaultTemplate>
        <div>This is the Contacts page</div>
        <TestComponent />
      </DefaultTemplate>
    </>
  );
}
