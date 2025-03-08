import DataTable from "@app/Table/DataTable";
import React from "react";

export default function UserManagamentPage() {
  return (
    <DataTable
      endpoint="/user/get"
      columns={[
        { key: "username", label: "Username" },
        { key: "role", label: "Role" },
        { key: "createdAt", label: "Created At" },
      ]}
    />
  );
}
