import ToggleTheme from "@app/components/Button/ToggleTheme";
import LanguageDropdown from "@app/components/Dropdown/LanguageDropdown";
import SearchInput from "@app/components/Input/SearchInput";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function Header() {
  const { register, watch } = useForm<any>();

  return (
    <HeadereWrapper className="header-dash">
      <SearchInput placeholder="Search..." register={register("search")} />
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
