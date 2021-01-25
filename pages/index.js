import Head from 'next/head';
import { useState, useEffect } from 'react';
// import { useTransition, animated, config } from 'react-spring';
import { useWindowSize } from '../hooks/useWindowSize';
import { NextSeo, LocalBusinessJsonLd } from 'next-seo';
import IndexStyles from '../stylesheets/Index.module.css';
import IndexContact from '../components/Forms/IndexContact';

const IndexPage = () => {
  const [showForm, setShowForm] = useState(true);

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
        <title>El Paso Real Estate | Peña El Paso</title>
      </Head>

      <NextSeo
        title='El Paso Real Estate | Peña El Paso'
        description='Peña El Paso is the premier real estate service for relocating buyers and affluent sellers in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.'
        canonical='https://movingtoelpaso.com/'
        openGraph={{
          url: 'https://movingtoelpaso.com/',
          title: 'El Paso Real Estate | Peña El Paso',
          description: 'Peña El Paso is the premier real estate service for relocating buyers and affluent sellers in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.',
          images: [
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png',
              width: 720,
              height: 720,
              alt: 'El Paso Real Estate - Peña El Paso logo',
            },
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1600702022/Pe%C3%B1a%20El%20Paso/beautiful-kitchen-d700.jpg',
              width: 700,
              height: 482,
              alt: 'beautiful-kitchen',
            },
          ],
        }}
      />

      <LocalBusinessJsonLd
        type="RealEstateAgent"
        id="https://penaelpaso.com"
        name="Peña El Paso"
        description="Peña El Paso is a premier real estate service in El Paso Texas."
        url="https://penaelpaso.com"
        telephone="+19153553477"
        address={{
          streetAddress: '',
          addressLocality: 'El Paso',
          addressRegion: 'TX',
          postalCode: '79912',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '31.7619',
          longitude: '106.4850',
        }}
        images={[
          'https://res.cloudinary.com/mimas-music/image/upload/v1603738711/Pe%C3%B1a%20El%20Paso/720BLACKonWHITE.jpg',
          'https://res.cloudinary.com/mimas-music/image/upload/v1597529025/Pe%C3%B1a%20El%20Paso/john-pena-headshot-m.jpg',
          'https://res.cloudinary.com/mimas-music/image/upload/v1600702022/Pe%C3%B1a%20El%20Paso/beautiful-kitchen-d700.jpg',
        ]}
        openingHours={[
          {
            opens: '08:00',
            closes: '22:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            validFrom: '2020-10-23',
            validThrough: '2021-10-23',
          }
        ]}
      />

      <div className={IndexStyles.pageContainer}>

        <div className={IndexStyles.topGrid}>
          <div className={IndexStyles.leftGrid}>
            <div>
              {/* <h1>Find your <span>dream</span></h1> */}
              <h1>Find your</h1>
              <span>dream</span>
              <h1>home in El Paso</h1>
            </div>

            <div className={IndexStyles.SeeContactBox}>
              <button className={IndexStyles.See}>
                <a href='https://johnpena.exprealty.com/' target='_blank'>
                  See Listings&nbsp;
                  </a>
                <span>&nbsp;&#10522;</span>
              </button>
            </div>
          </div>

          <div className={IndexStyles.rightGrid}>
            {screenSize === 'mobile' && (
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1604175400/Pe%C3%B1a%20El%20Paso/Updated%20SITE%20images/index-kitchen-m400.jpg' alt='beautiful-kitchen' title='beautiful-kitchen' />
            )}

            {screenSize === 'desktop' && (
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1604175354/Pe%C3%B1a%20El%20Paso/Updated%20SITE%20images/index-kitchen-d770.jpg' alt='beautiful-kitchen' title='beautiful-kitchen' />
            )}
          </div>
        </div>

        <div className={IndexStyles.vivaBox}>
          <div className={IndexStyles.vivaGrid}>
            <div className={IndexStyles.vivaHeading}>
              <h3><span>Viva</span> El Paso</h3>
              <p>El Paso is an extraordinary city that is full of life and passion. A great place to raise a young family or settle down in retirement. The city is affordable, friendly, and rich with arts and culture.</p>
              <br />
              <p>The city has a diverse collection of wonderful neighborhoods on both sides of the Franklin Mountains. Whatever it is that you and your family are looking for, let Peña El Paso go above and beyond for you.</p>
            </div>

            <div className={IndexStyles.coupledContainer}>
              {screenSize === 'mobile' && (
                <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600702022/Pe%C3%B1a%20El%20Paso/beautiful-kitchen-m400.jpg' alt='beautiful-kitchen' title='beautiful-kitchen' />
              )}

              {screenSize === 'desktop' && (
                <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600702022/Pe%C3%B1a%20El%20Paso/beautiful-kitchen-d700.jpg' alt="beautiful-kitchen" title="beautiful-kitchen" />
              )}
            </div>
          </div>
        </div>

        {showForm && (
          <div className={IndexStyles.contactGrid}>
            <div className={IndexStyles.contactBox}>
              <h3>Contact Us</h3>
              <img src="https://res.cloudinary.com/mimas-music/image/upload/v1604175659/casual-head-shot-400.jpg" alt="john-pena-headshot" srcSet="" />
            </div>

            <IndexContact showForm={showForm} setShowForm={setShowForm} />
          </div>
        )}

        {!showForm && (
          <div className={IndexStyles.contactThanks}>
            <div className={IndexStyles.contactBox}>
              <h3>Thank You</h3>
              {/* FIX: NOT OPTIMIZED */}
              <img src="https://res.cloudinary.com/mimas-music/image/upload/v1595342599/greenCasualHead.jpg" alt="john-pena-headshot" srcSet="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}


export default IndexPage;
