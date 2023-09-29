import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 8px 16px;
  max-width: 400px;
  /* margin: 0 auto; */
  background-color: rgba(255, 255, 255, 0.8);
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 24px;
  margin-right: 8px;
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 136, 254, 0.8);
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: #999;
  cursor: pointer;
`;
