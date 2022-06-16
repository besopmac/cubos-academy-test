import { Link } from 'react-router-dom';
import { HeaderSection, HeaderLogo } from './styles';

export const Header = () => {
  return (
    <HeaderSection>
      <Link to="/">
        <HeaderLogo />
      </Link>
    </HeaderSection>
  );
};
