// IMPORTAÇÕES ESSENCIAIS:
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import PublicLayout from "../components/(layouts)/PublicLayout";

// IMPORTAÇÃO DE PÁGINAS:
import MainPage from "../pages/(public)/MainPage";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
