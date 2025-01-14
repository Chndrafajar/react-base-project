import ToggleTheme from "@app/components/Button/ToggleTheme";
import LanguageDropdown from "@app/components/Dropdown/LanguageDropdown";
import SearchInput from "@app/components/Input/SearchInput";
import React from "react";
import styled from "styled-components";

export default function Header() {
  console.log("hello");
  return (
    <HeadereWrapper>
      <SearchInput />
      <LanguageDropdown />
      <ToggleTheme />
    </HeadereWrapper>
  );
}

const HeadereWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  padding: 0 1.25rem;
`;
