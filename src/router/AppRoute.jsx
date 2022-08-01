import { LoginPage } from "../pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="admin" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="login"/>} />
      </Routes>
    </>
  );
};
