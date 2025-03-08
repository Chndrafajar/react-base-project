import { Dflex } from "@app/components/display.style";
import RenderIcons from "@app/components/icons/RenderIcons";
import { SidebarMenu } from "@app/feature/Menu/MenuSidebar";
import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  activeBars?: any;
  setActiveBars?: any;
}

export default function Sidebar({ activeBars, setActiveBars }: Props) {
  return (
    <>
      <SidebarWrapper className={activeBars ? "active" : ""}>
        <HeaderSidebar className={activeBars ? "active" : ""}>
          <Dflex style={{ background: "inherit" }} className="gap-3">
            <Image src="/static/logo.png" alt="" style={{ width: "2.838rem" }} />
            <DFlexColumnSidebar className={activeBars ? "active" : ""}>
              <h5>ALFANDHI</h5>
              <span>CODE</span>
            </DFlexColumnSidebar>
          </Dflex>
          <IconsClose onClick={() => setActiveBars(!activeBars)}>
            <RenderIcons iconName="x" iconStyle="bold" iconSize="18px" />
          </IconsClose>
        </HeaderSidebar>
        {activeBars ? (
          <SubMenuTitle className={activeBars ? "active" : ""}>Menu</SubMenuTitle>
        ) : (
          <SubMenuTitle className={activeBars ? "active" : ""}>Menu Dashboard</SubMenuTitle>
        )}

        <SidebarLink className={activeBars ? "active" : ""}>
          {SidebarMenu.slice(0, 3).map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.path}>
                <RenderIcons iconSize="20px" iconName={menu?.iconName} iconStyle={menu?.iconStyle} />
                <span>{menu.title}</span>
              </NavLink>
            </li>
          ))}
        </SidebarLink>
      </SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div`
  z-index: 999;
  min-height: 100vh;
  width: 20rem;
  height: 100%;
  border-right: 1px solid #e2e2e2;
  background-color: #fff;

  @media print {
    display: none;
  }

  @media (max-width: 992px) {
    transition: all 0.4s ease;
    &.active {
      width: 80px;
      transition: 0.4s ease;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    transition: 0.4s ease;
    left: -400px;
    width: 20rem;
    &.active {
      width: 20rem;
      left: 0px;
      transition: 0.4s ease;
    }
  }
`;

const IconsClose = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  right: 15px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const HeaderSidebar = styled.div`
  padding: 0px 1.563rem;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: inherit;
  border-bottom: 1px solid #e2e2e2;
  @media (max-width: 992px) {
    &.active {
      padding: 0 16.7px;
    }
  }
  @media (max-width: 768px) {
    &.active {
      padding: 0px 1.563rem;
    }
  }
`;

const SidebarLink = styled.ul`
  list-style: none;
  padding: 0 1.25rem;
  margin-top: 1.25rem;

  @media (max-width: 992px) {
    &.active {
      padding: 0 1.25rem;

      li {
        a {
          padding: 0 6.5px;
          width: 34px;
          height: 34px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          /* justify-content: center; */
          border-radius: 50%;
          color: #787878;

          span {
            /* display: none; */
            position: absolute;
            margin-left: 60px;
            text-align: left;
            opacity: 0;
          }
          &:hover {
            background: #3772f0;
            transition: all 0.3s ease;
            color: #fff;

            span {
              opacity: 1;
            }
          }
          &.active {
            background-color: #3772f0;
            color: #fff;
            span {
              display: none;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    &.active {
      li {
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 0.625rem;
          padding: 0.5rem 0.938rem;
          border-radius: 1.875rem;
          width: 90%;
          margin-bottom: 0.313rem;
          color: #787878;

          span {
            font-size: 1rem;
            margin-left: 0;
            position: relative;
            opacity: 1;
          }

          &:hover {
            background: #3772f0;
            transition: all 0.3s ease;
            color: #fff;

            span {
              opacity: 1;
            }
          }
          &.active {
            background-color: #3772f0;
            color: #fff;

            span {
              display: block;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  li {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0.625rem;
      padding: 0.5rem 0.938rem;
      border-radius: 1.875rem;
      width: 90%;
      margin-bottom: 0.313rem;
      color: #787878;

      span {
        font-size: 1rem;
        color: #787878;
      }

      &:hover {
        background: #3772f0;
        transition: all 0.3s ease;
        color: #fff;

        span {
          color: #fff;
        }
      }
      &.active {
        background-color: #3772f0;
        color: #fff;
      }
    }
  }
`;

const SubMenuTitle = styled.h5`
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #787878;
  font-weight: 500;
  padding: 0px 20px;
  margin-top: 20px;
  @media (max-width: 992px) {
    &.active {
      padding: 0 17px;
    }
  }
  @media (max-width: 768px) {
    &.active {
      padding: 0px 20px;
      &::after {
        content: " Dashboard";
      }
    }
  }
`;

const DFlexColumnSidebar = styled.div`
  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0;
  }
  span {
    font-size: 0.875;
    color: #787878;
  }

  @media (max-width: 992px) {
    &.active {
      h5 {
        display: none;
      }
      span {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    &.active {
      h5 {
        display: block;
      }
      span {
        display: block;
      }
    }
  }
`;
