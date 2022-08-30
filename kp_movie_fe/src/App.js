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
      {getEmail && getPassword ? <HomePage /> : <p></p>}
      {/* Checking if local storage is keeping email and password.
      This level will check it every single page.      
    */}
      {getEmail && getPassword ? <SearchBar /> : <LoginLocal />}
    </BrowserRouter>
  );
}

export default App;
