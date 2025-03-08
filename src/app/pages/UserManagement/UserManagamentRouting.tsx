import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const UserManagamentPage = React.lazy(() => import("@app/pages/UserManagement/UserManagamentPage"));

function UserManagamentRouting() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Suspense>
            <UserManagamentPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default UserManagamentRouting;
