import Link from 'next/link';
import { LogoJsonLd } from 'next-seo';
import NavStyles from './Navigation.module.css';

const DeskNav = () => (
  <div className={NavStyles.DeskNav}>
    <div className={NavStyles.logo}>
      <Link href='/'>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597688173/Pe%C3%B1a%20El%20Paso/120BLACKonWHITE.jpg' alt='Peña-El-Paso-logo' title=' Peña-El-Paso-logo' />
      </Link>
      <LogoJsonLd
        logo="https://res.cloudinary.com/mimas-music/image/upload/v1597688173/Pe%C3%B1a%20El%20Paso/120BLACKonWHITE.jpg"
        url="https://penaelpaso.com"
      />
    </div>

    <div className={NavStyles.menuItems}>
      <div className={NavStyles.item}>
        <Link href='/relocatingbuyer' passHref>
          <a>RELOCATING BUYER EXPERIENCE</a>
        </Link>
      </div>

      <div className={NavStyles.item}>
        <Link href='/blog' passHref>
          <a>BLOG</a>
        </Link>
      </div>

      <div className={NavStyles.item}>
        <Link href='/about' passHref>
          <a>ABOUT</a>
        </Link>
      </div>

      {/* <div className={NavStyles.item}>
        <Link href='/sellers' passHref>
          <a>SELLERS</a>
        </Link>
      </div> */}

      {/* <div className={NavStyles.item}>
        <Link href='/buyers' passHref>
          <a>BUYERS</a>
        </Link>
      </div> */}

      {/* <div className={NavStyles.item}>
        <Link href='/contact' passHref>
          <a>CONTACT</a>
        </Link>
      </div> */}
    </div>
  </div>
);

export default DeskNav;
