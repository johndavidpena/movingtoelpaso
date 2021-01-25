import SMStyles from './SM.module.css';
import Link from 'next/link';

const Menu = ({ open, setOpen }) => {
  const openStyle = {
    transform: 'translateX(0)'
  }

  const closedStyle = {
    transform: 'translateX(-100%)'
  }
  return (
    <div open={open}
      className={SMStyles.menu}
      style={open ? openStyle : closedStyle}
    >
      <Link href='/' passHref>
        <a onClick={() => setOpen(!open)}>Home</a>
      </Link>
      <Link href='/blog' passHref>
        <a onClick={() => setOpen(!open)}>Blog</a>
      </Link>
      <Link href='/about' passHref>
        <a onClick={() => setOpen(!open)}>About</a>
      </Link>
      <Link href='/sellers' passHref>
        <a onClick={() => setOpen(!open)}>Sellers</a>
      </Link>
      <Link href='/buyers' passHref>
        <a onClick={() => setOpen(!open)}>Buyers</a>
      </Link>
      <Link href='/contact' passHref>
        <a onClick={() => setOpen(!open)}>Contact</a>
      </Link>
    </div>
  );
}

export default Menu;
