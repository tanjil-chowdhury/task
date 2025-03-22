import { useState, useEffect } from "react";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <h2>Task Manager</h2>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
