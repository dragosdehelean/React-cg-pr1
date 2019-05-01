import React from "react";
import EnrollmentForm from "./views/EnrollmentForm/EnrollmentForm";

import { Provider } from "./components/Context/EnrollContext";

function App() {
  return (
    <Provider>
      <EnrollmentForm />
    </Provider>
  );
}

export default App;
