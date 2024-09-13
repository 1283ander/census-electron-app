import styled from 'styled-components';
import { colors, typography } from '../designTokens';

const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.background};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1em;
  font-family: ${typography.fontFamily};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: ${colors.secondary};
  }

  &:active {
    background-color: #0051A8; /* Darker shade */
    transform: scale(0.98);
  }

  &:focus {
    outline: 2px solid ${colors.secondary};
    outline-offset: 2px;
  }
`;

export default Button;
