import { useSearchParams } from "react-router";
import FormCreateMessage from "./screen/form-create-message";
import RosasMessage from "./screen/rosas-message";

function App() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const message = searchParams.get("message");

  console.log(name, message);
  return <>{name && message ? <RosasMessage /> : <FormCreateMessage />}</>;
}

export default App;
