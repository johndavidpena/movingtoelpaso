import { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import BuyerStyles from '../../stylesheets/Buyers.module.css';

const BuyersGuide = () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 576) {
      setScreenSize('mobile');
    } else if (width > 576 && width <= 768) {
      setScreenSize('tablet');
    } else if (width > 768) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <div className={BuyerStyles.BuyersGuide}>
      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide1-m400.jpg' alt='buyers-guide-slide-1' title='buyers-guide-slide-1' />
      )}

      {screenSize === 'tablet' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600704516/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide1-t700.jpg' alt="buyers-guide-slide-1" title="buyers-guide-slide-1" />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600705030/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide-1-d1000.jpg' alt='buyers-guide-slide-1' title='buyers-guide-slide-1' />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide2-m400.jpg' alt='buyers-guide-slide-2' title='buyers-guide-slide-2' />
      )}

      {screenSize === 'tablet' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600704516/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide2-t700.jpg' alt="buyers-guide-slide-2" title="buyers-guide-slide-2" />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600705030/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide-2-d1000.jpg' alt='buyers-guide-slide-2' title='buyers-guide-slide-2' />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide3-m400.jpg' alt='buyers-guide-slide-3' title='buyers-guide-slide-3' />
      )}

      {screenSize === 'tablet' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600704516/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide3-t700.jpg' alt="buyers-guide-slide-3" title="buyers-guide-slide-3" />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600705031/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide-3-d1000.jpg' alt='buyers-guide-slide-3' title='buyers-guide-slide-3' />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703253/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide4-m400.jpg' alt='buyers-guide-slide-4' title='buyers-guide-slide-4' />
      )}

      {screenSize === 'tablet' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600704516/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide4-t700.jpg' alt="buyers-guide-slide-4" title="buyers-guide-slide-4" />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600705031/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide4-d1000.jpg' alt='buyers-guide-slide-4' title='buyers-guide-slide-4' />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703253/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide5-m400.jpg' alt='buyers-guide-slide-5' title='buyers-guide-slide-5' />
      )}

      {screenSize === 'tablet' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600704516/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide5-t700.jpg' alt="buyers-guide-slide-5" title="buyers-guide-slide-5" />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600705031/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide5-d1000.jpg' alt='buyers-guide-slide-5' title='buyers-guide-slide-5' />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703254/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide6-m400.jpg' alt='buyers-guide-slide-6' title='buyers-guide-slide-6' />
      )}

      {screenSize === 'tablet' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600704516/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide6-t700.jpg' alt="buyers-guide-slide-6" title="buyers-guide-slide-6" />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600705031/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide6-d1000.jpg' alt='buyers-guide-slide-6' title='buyers-guide-slide-6' />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703254/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide7-m400.jpg' alt='buyers-guide-slide-7' title='buyers-guide-slide-7' />
      )}

      {screenSize === 'tablet' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600704516/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide7-t700.jpg' alt="buyers-guide-slide-7" title="buyers-guide-slide-7" />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600705031/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide7-d1000.jpg' alt='buyers-guide-slide-7' title='buyers-guide-slide-7' />
      )}
    </div>
  );
}


export default BuyersGuide;