import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Input, SearchInput } from './styles';

export const Search = () => {
  const [text, setText] = useState('');

  return (
    <>
      <SearchInput className={'withIcon'}>
        <ImSearch className={'searchIcon'} />
        <Input
          type="text"
          placeholder="Busque pelo nome, ano ou gênero"
          // onSubmit={(e: React.MouseEvent<HTMLElement>) => {
          //   e.preventDefault();
          // }}
        />
      </SearchInput>
    </>
  );
};
