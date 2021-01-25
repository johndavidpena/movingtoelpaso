import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useWindowSize } from '../hooks/useWindowSize';
import MobHeader from './MobHeader';
import DeskNav from './DeskNav';
import Footer from './Footer';

const Layout = props => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  const size = useWindowSize();
  let width = size.width;

  const [menu, setMenu] = useState('');

  useEffect(() => {
    if (width <= 768) {
      setMenu('mobile');
    } else if (width > 768) {
      setMenu('desktop');
    }
    return () => { };
  }, [width]);

  const [open, setOpen] = useState(false);

  return (
    <animated.div style={fade} >
      <div className='navMainFooter'>
        {menu === 'mobile' && <MobHeader open={open} setOpen={setOpen} /> || <DeskNav />}

        <main>
          {props.content}
        </main>

        <Footer />
      </div>
    </animated.div>
  );
}

export default Layout;
