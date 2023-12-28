import { SelectedPage } from "../../shared/types";
import { useState } from "react";
import Link from "../../components/Navbar/Link/Link";
import "./Navbar.css";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(true);

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme")
  );

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setDarkMode();
      setSelectedTheme("dark");
    } else {
      setLightMode();
      setSelectedTheme("light");
    }
  };

  return (
    <div className="navbar">
      <div
        className={`${
          isMenuToggled ? "navbar-section-closed" : "navbar-section"
        }`}
      >
        <div className="navbar-header">
          <div className="navbar-logo">
            <span className="logo-text">JK</span>
          </div>
          <div className="navbar-description text">
            <span className="name">Jan Kierejsza</span>
            <span className="profession">Front-end developer</span>
          </div>
          <div
            className={`${
              isMenuToggled ? "navbar-toggle" : "navbar-toggle-reverse"
            }`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="navbar-elements">
          <div className="elements-links">
            <Link
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              }
              page="About"
              setIsMenuToggled={setIsMenuToggled}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              }
              page="Experience"
              setIsMenuToggled={setIsMenuToggled}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              }
              page="Projects"
              setIsMenuToggled={setIsMenuToggled}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              }
              page="Contact"
              setIsMenuToggled={setIsMenuToggled}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
          </div>
          <div className="theme-button">
            <div
              className={`moon-sun-icon ${
                selectedTheme === "dark" ? "light" : "dark"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon sun"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon moon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
            <span className="mode-text text">
              {selectedTheme === "dark" ? (
                <span>Dark mode</span>
              ) : (
                <span>Light mode</span>
              )}
            </span>
            <label className="toggle-mode-switch">
              <input
                type="checkbox"
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
              ></input>
              <span className="switch"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
