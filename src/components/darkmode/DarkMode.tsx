import Sun from "./Sun.jsx";
import Moon from "./Moon.jsx";
import "./DarkMode.css";

const lightMode = () => {
  document.querySelector("body").setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
};
const darkMode = () => {
  document.querySelector("body").setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
};

const seletedTheme = localStorage.getItem("theme");

seletedTheme === "dark" && darkMode();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toggleTheme = (e: any) => {
  if (e.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
};
const DarkMode = () => {
  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onClick={toggleTheme}
        defaultChecked={seletedTheme === "dark"}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
