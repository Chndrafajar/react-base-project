import React from "react";
import styled from "styled-components";

export default function SearchInput() {
  return (
    <>
      <InputWrapper>
        <i className="ph-bold ph-magnifying-glass"></i>
        <input type="text" placeholder="search...." />
      </InputWrapper>
    </>
  );
}

const InputWrapper = styled.div`
  background: #f9fafb;
  height: 2.813rem;
  border-radius: 0.625rem;
  min-width: 25rem;
  display: flex;
  gap: 0.938rem;
  align-items: center;
  padding: 0px 0.938rem;

  i {
    color: #5d5fef;
    font-size: 1.25rem;
  }

  input {
    outline: none;
    width: 100%;
    border: none;
    background: inherit;
  }
`;
