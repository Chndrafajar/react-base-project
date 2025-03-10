import React from "react";
import styled from "styled-components";
import { Dropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RenderIcons from "@app/components/icons/RenderIcons";

export default function Header({ activeBars, setActiveBars }: any) {
  return (
    <HeaderWrapper>
      <DFlexJBetween>
        <BoxSidebar onClick={() => setActiveBars(!activeBars)} className={activeBars ? "active" : ""}>
          <RenderIcons iconName={`${activeBars ? "caret-right" : "caret-left"}`} iconSize="20px" />
        </BoxSidebar>
        <BarsIcons>
          <div onClick={() => setActiveBars(!activeBars)}>
            <RenderIcons iconName="list" iconStyle="bold" iconSize="20px" />
          </div>
        </BarsIcons>
        <Dropdown>
          <Dropdown.Toggle style={{ background: "inherit", border: "none" }} id="dropdown-basic">
            <Image
              src="/static/logo.png"
              alt=""
              style={{ width: "2.188rem", height: "2.188rem", borderRadius: "50%", objectFit: "cover" }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </DFlexJBetween>
    </HeaderWrapper>
  );
}

const BoxSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.233rem;
  width: 25px;
  height: 25px;
  background: #f9fafb;
  border: 1px solid #e2e2e2;
  cursor: pointer;
  transition: all 0.4s ease;

  &.active {
    transition: 0.4s ease;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  height: 5rem;
  border-bottom: 1px solid #e2e2e2;
  background-color: #fff;
  display: flex;
  align-items: center;
  transition: 0.4s ease;

  @media print {
    display: none;
  }
`;

const DFlexJBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 1.25rem;
`;

const BarsIcons = styled.div`
  opacity: 0;
  svg {
    display: none;
  }

  @media (max-width: 992px) {
    svg {
      display: block;
    }
    cursor: pointer;
    opacity: 1;
  }
`;
