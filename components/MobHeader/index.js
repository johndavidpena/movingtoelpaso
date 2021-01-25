import { useRef } from 'react';
import Link from 'next/link';
import MHStyles from './MH.module.css';
import Burger from '../Burger';
import SideMenu from '../SideMenu';
import { LogoJsonLd } from 'next-seo';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Header = ({ open, setOpen }) => {
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className={MHStyles.burger}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
      </div>

      <div className={MHStyles.logo}>
        <Link href='/' >
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png' alt='Peña-El-Paso-logo' title='Peña-El-Paso-logo' />
        </Link>
        <LogoJsonLd
          logo="https://res.cloudinary.com/mimas-music/image/upload/v1597688173/Pe%C3%B1a%20El%20Paso/120BLACKonWHITE.jpg"
          url="https://penaelpaso.com"
        />
      </div>
    </nav>
  );
}

export default Header;