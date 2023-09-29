/**
 *
 * Search
 *
 */
import React, { memo, useState } from 'react';
import { SearchBarContainer, SearchIcon, SearchInput } from './styled';

interface Props {}

export const SearchBar = memo((props: Props) => {
  const [location, setLocation] = useState('');

  return (
    <SearchBarContainer>
      <SearchInput
        placeholder="Enter location..."
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <SearchIcon size={20} />
    </SearchBarContainer>
  );
});
