import { useEffect, useState } from "react";
import toggleLogo from "/toggle.svg";
import "./App.css";

const App = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.remove(dark ? "light" : "dark");
    document.body.classList.add(dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const moon = <i className="fa-solid fa-moon text-gray-300"></i>;
  const sun = <i className="fa-solid fa-sun text-yellow-400"></i>;

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-20">
        <img src={toggleLogo} className="logo" alt="toggle logo" />
        <h1 className="tracking-tighter">Dark Mode Toggle</h1>
        <div className="flex gap-2">
          <a
            target="_blank"
            href="https://github.com/tonybnya/dark-mode-toggle"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="text-2xl">
        <button onClick={() => setDark(!dark)}>{dark ? sun : moon}</button>
      </div>
    </>
  );
};

export default App;
