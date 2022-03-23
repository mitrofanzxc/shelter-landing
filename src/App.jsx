import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

import { MainPage } from "./pages/MainPage";
import { PetsPage } from "./pages/PetsPage";

import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="pets" element={<PetsPage />} />
          <Route path="help" element={<MainPage />} />
          <Route path="contacts" element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
