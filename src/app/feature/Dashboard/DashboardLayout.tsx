import Header from "@app/feature/Dashboard/Header";
import Sidebar from "@app/feature/Dashboard/Sidebar";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function DashboardLayout() {
  const [activeBars, setActiveBars] = useState(false);

  return (
    <>
      <ContentDashStyled>
        <Sidebar activeBars={activeBars} setActiveBars={setActiveBars} />
        <main style={{ width: "100%" }}>
          <Header activeBars={activeBars} setActiveBars={setActiveBars} />
          <Content className="content-dash">
            <Outlet />
          </Content>
        </main>
      </ContentDashStyled>
    </>
  );
}

const ContentDashStyled = styled.div`
  display: flex;
  height: 100vh;
  background: #f9fafb;
`;

const Content = styled(Container)`
  padding: 1.533rem;
  /* max-height: 80vh; */
  /* background: #f9fafb; */
  width: 100%;
  height: 90vh;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0px;
  }

  @media screen {
  }
`;
