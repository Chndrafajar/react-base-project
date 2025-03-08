import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles/scss/bootstrap.scss";
import { Route, Routes } from "react-router-dom";
import { Notifications } from "react-push-notification";
import DashboardLayout from "@app/feature/Dashboard/DashboardLayout";
import UserManagamentRouting from "@app/pages/UserManagement/UserManagamentRouting";

export default function App() {
  // const dispatch = useDispatch();
  const themeMode = useSelector((state: any) => state.darkMode.themeMode);

  useEffect(() => {
    // Pantau perubahan tema perangkat
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (themeMode === "system") {
        const isDarkModePreferred = mediaQuery.matches;
        document.body.classList.toggle("dark-mode", isDarkModePreferred);
        document.body.classList.toggle("light-mode", !isDarkModePreferred);
      }
    };

    if (themeMode === "system") {
      handleChange(); // Terapkan tema saat mode "system" dipilih
      mediaQuery.addEventListener("change", handleChange);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [themeMode]);

  return (
    <>
      <Notifications />
      <Routes>
        <Route path="" element={<DashboardLayout />}>
          <Route
            path="user/*"
            element={
              <Suspense>
                <UserManagamentRouting />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
