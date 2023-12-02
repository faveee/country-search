import "./styles.css"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = () => {
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

const toggleTheme = () => {
  if (theme === "dark") {
    setTheme("light");
    document.body.classList.remove("dark");
  } else {
    setTheme("dark");
    document.body.classList.remove("light");
  }
};

useEffect(() => {
  localStorage.setItem("theme", theme);
  document.body.classList.add(theme);
}, [theme]);

  return (
    <div className="main">
      <h3>Where in the world?</h3>
      <div className="theme-toggler">
        {theme === "dark" ? (
          <button className="toggle-btn" id="toggle-theme-btn" onClick={toggleTheme}>
            <BsFillMoonFill color="white" /> Dark Theme
          </button>
        ) : (
          <button className="toggle-btn" id="toggle-theme-btn" onClick={toggleTheme}>
            <BsFillSunFill color="black" /> Light Theme
          </button>
        )}
      </div>
    </div>
  );
}
export default Header;
