import DashboardLayout from "@app/feature/Dashboard/DashboardLayout";
import React from "react";
import { Button } from "react-bootstrap";
import addNotification from "react-push-notification";

export default function DashboardPage() {
  const handleClick = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "light",
      native: true,
    });
  };

  return (
    <DashboardLayout>
      <div className="px-5">
        <Button onClick={handleClick}>Push Notif</Button>
      </div>
    </DashboardLayout>
  );
}
