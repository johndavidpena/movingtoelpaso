import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useWindowSize } from '../../hooks/useWindowSize';
import { NextSeo } from 'next-seo';
import IndexStyles from '../../stylesheets/Index.module.css';
import SellerStyles from '../../stylesheets/Sellers.module.css';

const Sellers = () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    // TODO: Clean up hook below to avoid memory leak
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>El Paso Real Estate - Sellers | Peña El Paso</title>
      </Head>

      <NextSeo
        title='El Paso Real Estate - Sellers | Peña El Paso'
        description='Peña El Paso is the premier real estate service for sellers in El Paso Texas. We are focused on providing you with 6 assurances. Let us go above and beyond for you!'
        canonical='https://penaelpaso.com/sellers/index'
        openGraph={{
          url: 'https://penaelpaso.com/sellers/index',
          title: 'El Paso Real Estate - Sellers | Peña El Paso',
          description: 'Peña El Paso is the premier real estate service for sellers in El Paso Texas. We are focused on providing you with 6 assurances. Let us go above and beyond for you!',
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

      <div className={IndexStyles.pageContainer}>
        <div className={SellerStyles.topGrid}>
          <div>
            <h1 className={SellerStyles.heading}>Welcome Sellers</h1>

            <h3 className={SellerStyles.subHeading}>Peña El Paso is committed to providing the highest level of care and service to El Paso home sellers.</h3>

            <br />

            <p>We offer the following assurances to you and your family.</p>

            <br />

            <h4 className={SellerStyles.assurances}>Certainty</h4>

            <p>The assurance that you can avoid pain and gain pleasure. In this case, 'pain' includes many of the common hassles and stresses involved in selling a home. 'Pleasure' is most commonly found in getting top dollar for your home in the shortest amount of time.</p>

            <h4 className={SellerStyles.assurances}>Variety</h4>

            <p>The need for the unknown, change, new stimuli, or something different. Gone are the days of putting a 'For Sale' sign in the yard and putting your home on the local MLS. At Peña El Paso we leverage modern technology and a wide social media outreach that most agents can not offer.</p>

            <h4 className={SellerStyles.assurances}>Significance</h4>

            <p>To feel unique, important, special, and needed. One of the unique ways that we create a sense of significance for you as a home seller is how we market your home. While most agents can post images of your property to their personal social media accounts, the reality is that these posts are not going to reach more than a handful of disinterested viewers. At Peña El Paso, we produce a professional video tour of your home and post it to our YouTube channel, <a className={SellerStyles.link} href='https://www.youtube.com/channel/UCmOlalytn-ZkxGjZspmhj6w' target='_blank'>'Living in El Paso Texas'</a> that reaches thousands of viewers who are actually interested in acquiring homes.</p>

            <h4 className={SellerStyles.assurances}>Connection</h4>

            <p>A strong feeling of closeness or union with someone or something. As a client, we guarantee that you will feel connected! This is accomplished primarily through fantastic communication. I understand that great communication starts with listening. You want and deserve constant feedback, honesty, and professional insight.</p>

            <h4 className={SellerStyles.assurances}>Growth</h4>

            <p>An expansion of capacity, capability or understanding. For the investor that is looking to sell a property, the ever-widening reach of Peña El Paso offers an opportunity to network with more potential customers and find more deals. Your desire to increase equity or generate passive income can be facilitated directly by fostering a lasting relationship with us.</p>

            <h4 className={SellerStyles.assurances}>Contribution</h4>

            <p>A sense of service and focus on helping, giving to and supporting others. In the spirit of creating and nurturing the El Paso community, Peña El Paso is committed to enhancing the visibility of the city and it's residents in the eyes of the world. One of the goals of 'Living in El Paso Texas' is to show the world how amazing El Paso and it's people are! Future episodes are going to focus on local businesses, events, education, and artists.</p>

            <br />

            <h3 className={SellerStyles.subHeading}>Interested in selling your home with <span>Peña El Paso</span>?</h3>

            <br />

            <h3 className={SellerStyles.subHeading}>Call John at <span>(915)355-3477</span>.</h3>

            <br />
          </div>

          {screenSize === 'mobile' && (
            <div className={SellerStyles.myPicture}>
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597529717/Pe%C3%B1a%20El%20Paso/john-pena-white-shirt-m.jpg' alt='john-pena-white-shirt' title='john-pena-white-shirt' />
            </div>
          )}

          {screenSize === 'desktop' && (
            <div className={SellerStyles.myPicture}>
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597529717/Pe%C3%B1a%20El%20Paso/john-pena-white-shirt-d.jpg' alt='john-pena-white-shirt' title='john-pena-white-shirt' />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sellers;
