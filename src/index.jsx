import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Analytics/Analytics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

export const ThemeContext = React.createContext({ isDarkMode: false });

function App() {
  const [isDarkMode, setDarkMode] = useState(ThemeContext.isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
