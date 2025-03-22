import { useState, useEffect } from "react";
import TaskManager from "./pages/TaskManager";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <TaskManager />
      <Footer />
    </div>
  );
}

export default App;
