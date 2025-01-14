import SunIcons from "@app/components/icons/SunIcons";
import { setThemeMode } from "@app/store/themeMode";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export default function ToggleTheme() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: any) => state.darkMode.themeMode);
  return (
    <>
      <Dropdown>
        <ToggleButton>
          {themeMode === "light" && (
            <>
              <i className="ph-fill ph-sun" style={{ fontSize: "17px" }}></i>
              {/* <SunIcons width={25} height={25} /> */}
              <span>Light</span>
            </>
          )}
          {themeMode === "dark" && (
            <>
              <i className="ph-fill ph-moon" style={{ fontSize: "17px" }}></i>
              {/* <SunIcons width={25} height={25} /> */}
              <span>Dark</span>
            </>
          )}
          {themeMode === "system" && (
            <>
              <i className="ph-fill ph-airplay" style={{ fontSize: "17px" }}></i>
              <span>System</span>
            </>
          )}
        </ToggleButton>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => dispatch(setThemeMode("light"))}>Light</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(setThemeMode("dark"))}>Dark</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(setThemeMode("system"))}>System</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

const ToggleButton = styled(Dropdown.Toggle)`
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  color: inherit;
  gap: 5px;

  &::after {
    display: none;
  }
`;
