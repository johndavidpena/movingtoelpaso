import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { NextSeo } from 'next-seo';
import AboutStyles from '../../stylesheets/About.module.css';
import IndexStyles from '../../stylesheets/Index.module.css';
import BuyerStyles from '../../stylesheets/Buyers.module.css';
import BlogStyles from '../../stylesheets/Blog.module.css';
import VideoStyles from '../../stylesheets/Video.module.css';
// import BuyersGuide from './BuyersGuide';

const RelocatingBuyerExperience = () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>El Paso Real Estate - Relocating Buyer Experience | Peña El Paso</title>
      </Head>

      <NextSeo
        title='El Paso Real Estate - Relocating Buyer Experience | Peña El Paso'
        description='Peña El Paso is the premier real estate service for buyers, sellers, and investors in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.'
        canonical='https://penaelpaso.com/buyers/index'
        openGraph={{
          url: 'https://penaelpaso.com/buyers/index',
          title: 'El Paso Real Estate - Relocating Buyer Experience | Peña El Paso',
          description: 'Peña El Paso is the premier real estate service for buyers, sellers, and investors in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.',
          images: [
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png',
              width: 720,
              height: 720,
              alt: 'El Paso Real Estate - Peña El Paso logo',
            },
            // {
            //   url: 'https://www.example.ie/og-image-02.jpg',
            //   width: 900,
            //   height: 800,
            //   alt: 'Og Image Alt Second',
            // },
            // { url: 'https://www.example.ie/og-image-03.jpg' },
            // { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
        }}
      />

      <div className={AboutStyles.about}>

        {screenSize === 'mobile' && (
          <div className={AboutStyles.image}>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1611428871/Pe%C3%B1a%20El%20Paso/casualWhite1_400square.jpg' alt='john-pena-headshot-white-shirt' title='john-pena-headshot-white-shirt' />
          </div>
        )}

        {screenSize === 'desktop' && (
          <div className={AboutStyles.image}>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1611428871/Pe%C3%B1a%20El%20Paso/casualWhite1_400square.jpg' alt='john-pena-headshot-white-shirt' title='john-pena-headshot-white-shirt' />
          </div>
        )}

        <div className={AboutStyles.text}>
          <h1>Relocating to El Paso Made Easy</h1>

          <p>Peña El Paso is pleased to offer you our <i>Relocating Buyer Experience</i>. The goal of the program is to make your move to El Paso stress-free, timely, and pleasant. We all know that moving can be anything but stress-free and pleasant, which is why we've created this special program.</p>

          <br />

          <p>There are many moving parts when it comes to making a successful transition from where you currently live to a new city. Let us help you manage the home buying experience so that you can take care of your family and the numerous tasks that need to be completed.</p>
          <br />

          <p>We are deeply committed to providing you the absolute best service. We pride ourselves on going <i>Above and Beyond</i> for you. This means that we will work harder and provide you with more value than any other real estate service. We intend to nurture a long term relationship with you as both a client and friend.</p>

          <br />

          <p>Please watch the short video below that explains the details of the program. If you have any questions, please email John at john@penaelpaso.com or Leah at leah@penaelpaso.com. Additionally, John can be reached directly at (915)355-3477.</p>
        </div>
      </div>

      <div className={BlogStyles.blog}>
        <div className={BlogStyles.post}>
          <div className={VideoStyles.videoResponsive}>
            <iframe title="relocating buyer experience" width="560" height="315" src="https://www.youtube.com/embed/rdBCjEPLYwE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* <div className={IndexStyles.pageContainer}>
        <BuyersGuide />
      </div> */}
    </>
  );
}

export default RelocatingBuyerExperience;

