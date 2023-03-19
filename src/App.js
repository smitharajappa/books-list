import React, { useState } from "react";
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

function App() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Sidenav open={open} toggleOpen={toggleOpen} />
          <main className={clsx(open ? "m_250" : "m_60")}>
            <div className="content" tabIndex={0}>
              <ErrorBoundary>
                <Routes>
                  <Route path="/books-list" element={<Books />} />
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
