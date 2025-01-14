import { setThemeMode } from "@app/store/themeMode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/scss/bootstrap.scss";
import TableDynamic from "@app/components/Table/TableDynamic";
import { Button, Container, Dropdown } from "react-bootstrap";
import ToggleTheme from "@app/components/Button/ToggleTheme";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "@app/pages/Dashboard/DashboardPage";

export default function App() {
  const dispatch = useDispatch();
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

  const apiService = "https://jsonplaceholder.typicode.com/users"; // Example API
  const method = "GET"; // Request method
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Username", accessor: "username" },
    { header: "Phone", accessor: "phone" },
  ];

  return (
    // <Container className="mt-4">
    //   <div>
    //     <ToggleTheme />
    //     <p className="mt-2">
    //       Mode saat ini: <strong>{themeMode}</strong>
    //     </p>
    //   </div>
    //   <TableDynamic apiService={apiService} method={method} columns={columns} />
    // </Container>
    <>
      <Routes>
        <Route path="" element={<DashboardPage />} />
      </Routes>
    </>
  );
}
