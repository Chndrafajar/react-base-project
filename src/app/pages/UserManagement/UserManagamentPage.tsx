import DataAction from "@app/components/Dropdown/DataAction";
import DataTable from "@app/Table/DataTable";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function UserManagamentPage() {
  const columnData = [
    { key: "username", label: "Username" },
    { key: "role", label: "Role" },
    { key: "createdAt", label: "Created At" },
    {
      key: "actions",
      label: "Actions",
      render: (row: any) => <DataAction handleDelete={() => handleDelete(row?._id)} handleEdit={handleEdit} />,
    },
  ];
  const [action, setAction] = useState<any>();
  const [idParams, setIdParams] = useState<any>();

  const handleEdit = (row: any) => {
    console.log("Edit user:", row);
  };

  const handleDelete = (id: string) => {
    setAction("modal.delete");
    setIdParams(id);
  };

  return (
    <>
      <Row className="g-2">
        <Col md={12}>
          <h5>User Management</h5>
        </Col>
        <Col md={12}>
          <DataTable
            endpoint="/user"
            columns={columnData}
            dataAction={action}
            idParams={idParams}
            setDataAction={setAction}
          />
        </Col>
      </Row>
    </>
  );
}
