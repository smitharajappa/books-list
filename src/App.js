import React, { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Books from "./components/books";
import Sidenav from "./components/sidenav";
import PageNotFound from "./components/pageNotFound";
import clsx from "clsx";
import ErrorBoundary from "./components/ErrorBoundary/index";
import atomLogo from "./assets/atom.png";

function App() {
  const [open, setopen] = useState(true);
  const [width, setWidth] = useState(0);

  const toggleOpen = () => {
    setopen(!open);
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    if (width < 600) {
      setopen(false);
    } else {
      setopen(true);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Sidenav open={open} toggleOpen={toggleOpen} />
          <main className={clsx(open ? "m_250" : "m_60")}>
            <div className="title" tabIndex={0}>
              <img src={atomLogo} width={150} height={50} alt="logo" />
            </div>
            <div className="content" tabIndex={0}>
              <ErrorBoundary>
                <Routes>
                  <Route
                    path={process.env.PUBLIC_URL + "/"}
                    element={<Books />}
                  />
                  <Route path="*" exact={true} element={<PageNotFound />} />
                </Routes>
              </ErrorBoundary>
            </div>
          </main>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
