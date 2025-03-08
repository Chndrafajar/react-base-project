import { Dflex } from "@app/components/display.style";
import RenderIcons from "@app/components/icons/RenderIcons";
import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  handleDelete?: any;
  handleEdit?: any;
}

export default function DataAction({ handleDelete, handleEdit }: Props) {
  return (
    <Dflex style={{ justifyContent: "center" }}>
      <DropdownStyled>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          <RenderIcons iconName="dots-three" iconStyle="bold" iconSize="20px" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {handleDelete && (
            <Dropdown.Item onClick={handleDelete} className="text-danger">
              <Dflex className="gap-1" style={{ alignItems: "center" }}>
                <RenderIcons iconName="trash" iconStyle="duotone" iconSize="18px" /> Delete
              </Dflex>
            </Dropdown.Item>
          )}
          {handleEdit && (
            <Dropdown.Item>
              <Dflex className="gap-1" style={{ alignItems: "center" }}>
                <RenderIcons iconName="pencil-simple" iconStyle="duotone" iconSize="18px" /> Edit
              </Dflex>
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </DropdownStyled>
    </Dflex>
  );
}

const DropdownStyled = styled(Dropdown)`
  .dropdown-toggle::after {
    display: none;
  }

  .btn.active,
  .btn.show {
    border: none;
  }
`;
