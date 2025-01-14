import React from "react";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <>
      <SidebarWrapper>
        <HeaderLogo>
          <h5>Alfandhi</h5>
        </HeaderLogo>
      </SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div`
  width: 21.563rem;
  padding: 2rem;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;
