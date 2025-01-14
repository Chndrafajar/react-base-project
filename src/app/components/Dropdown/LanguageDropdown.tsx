import { DflexAlignCenter } from "@app/components/display.style";
import UnitedIcons from "@app/components/icons/UnitedIcons";
import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export default function LanguageDropdown() {
  return (
    <div>
      <Dropdown>
        <DropdownToggle variant="link" id="dropdown-basic" style={{ whiteSpace: "nowrap" }}>
          <DflexAlignCenter className="gap-2">
            <UnitedIcons />
            <span>Eng (US)</span>
          </DflexAlignCenter>
        </DropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Indonesia</Dropdown.Item>
          <Dropdown.Item href="#/action-2">English</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

const DropdownToggle = styled(Dropdown.Toggle)`
  &.dropdown-toggle::after {
    display: none;
  }
  text-decoration: none;
  color: inherit;
`;
