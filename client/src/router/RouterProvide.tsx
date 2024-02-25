import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "../app/Navbar";
import { useAppSelector } from "../common/hooks";
import ScrollToTop from "../common/ScrollTop";
import LogModal from "../redux/logModal/LogModal";
import SearchLog from "../redux/logModal/SearchLog";
import SearchModal from "../redux/navbar/components/SearchModal";
import Navbar from "../redux/navbar/Navbar";
import routes from "./routes";

function RouterProvider() {
  const { inputValue, isModalOpen, isLogOpen, isLogSearchOpen } =
    useAppSelector((state) => state.navbar);

  return (
    <Router>
      <Navbar />
      {inputValue && isModalOpen && <SearchModal />}
      {isLogOpen && isLogSearchOpen && <SearchLog />}
      {isLogOpen && <LogModal />}
      <ScrollToTop />
      {/* <main>
        <Routes>
          {routes.map(({ id, path, element: Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
      </main> */}
    </Router>
  );
}

export default RouterProvider;
