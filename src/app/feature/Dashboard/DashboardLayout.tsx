import Header from "@app/components/Header";
import Sidebar from "@app/feature/Dashboard/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function DashboardLayout({ children }: any) {
  return (
    <>
      <Dflex>
        <Sidebar />
        <main style={{ width: "100%" }}>
          <Header />
          <Content>{children}</Content>
        </main>
      </Dflex>
    </>
  );
}

const Dflex = styled.div`
  display: flex;
`;

const Content = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #f9fafb;
  width: 100%;
`;
