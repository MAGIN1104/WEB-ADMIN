import { Navigate, Route, Routes } from "react-router-dom";
import { MainApp } from "../pages/MainApp";
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="admin*" element={<MainApp />} />
      </Routes>
    </>
  );
};
