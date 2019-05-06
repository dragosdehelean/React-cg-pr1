import React from "react";
import EnrollmentForm from "./views/EnrollmentForm/EnrollmentForm";

import { Provider } from "./context/EnrollContext";

function App() {
  return (
    <Provider>
      <EnrollmentForm />
    </Provider>
  );
}

export default App;
