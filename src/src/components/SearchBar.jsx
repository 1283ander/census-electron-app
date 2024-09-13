import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../designTokens';

const Input = styled.input`
  padding: 10px 20px;
  width: 300px;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  font-size: 1em;
  font-family: ${typography.fontFamily};
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 5px ${colors.primary};
  }
`;

const SearchBar = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Search by state..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
