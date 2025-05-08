import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  const [isRegistering, setIsRegistering] = useState(true);

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <div className="App">
      {isRegistering ? (
        <RegisterForm onSwitch={toggleForm} />
      ) : (
        <LoginForm onSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
