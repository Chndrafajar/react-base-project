import Header from "@app/feature/Dashboard/Header";
import Sidebar from "@app/feature/Dashboard/Sidebar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function DashboardLayout() {
  const [activeBars, setActiveBars] = useState(false);

  return (
    <>
      <Dflex>
        <Sidebar activeBars={activeBars} setActiveBars={setActiveBars} />
        <main style={{ width: "100%" }}>
          <Header activeBars={activeBars} setActiveBars={setActiveBars} />
          <Content className="content-dash">
            <Outlet />
          </Content>
        </main>
      </Dflex>
    </>
  );
}

const Dflex = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 1.533rem;
  height: 90vh;
  /* max-height: 80vh; */
  background: #f9fafb;
  width: 100%;
`;
