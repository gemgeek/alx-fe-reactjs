import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/FormikForm";

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <hr />
      <formikForm />
    </div>
  );
}

export default App;
