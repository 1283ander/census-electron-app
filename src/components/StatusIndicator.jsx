import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../designTokens';

const StatusContainer = styled.div`
  margin-bottom: 20px;
  font-family: ${typography.fontFamily};
  color: ${props => {
    if (props.status.includes('error')) return 'red';
    if (props.status.includes('success')) return 'green';
    return colors.text;
  }};
  display: flex;
  align-items: center;
`;

const Spinner = styled.div`
  border: 4px solid ${colors.lightGray};
  border-top: 4px solid ${colors.primary};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const StatusIndicator = ({ status }) => {
  const isLoading = status.includes('Fetching') || status.includes('Loading');

  return (
    <StatusContainer status={status}>
      {isLoading && <Spinner />}
      {status}
    </StatusContainer>
  );
};

export default StatusIndicator;
