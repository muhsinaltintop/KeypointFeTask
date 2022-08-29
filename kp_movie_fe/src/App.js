import "./App.css";
import LoginLocal from "./Components/LoginLocal/LoginLocal";
import HomePage from "./Components/HomePage/HomePage";
import SearchBar from "./Components/SearchBar/SearchBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  return (
    <BrowserRouter>
      <HomePage />
      {/* Checking if local storage is keeping email and password.
      This level will check it every single page.      
    */}
      {getEmail && getPassword ? (
        <SearchBar placeholder="Enter keyword" />
      ) : (
        <LoginLocal />
      )}
    </BrowserRouter>
  );
}

export default App;
