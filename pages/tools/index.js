import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import ToolsStyles from '../../stylesheets/Tools.module.css';
import StrengthOfOffer from './strengthofoffer';
import HomeValue from './homevalue';

const Tools = () => {
  const [showStrength, setShowStrength] = useState(false);
  const [showValue, setShowValue] = useState(false);

  return (
    <>
      <Head>
        <title>El Paso Real Estate - Tools | Peña El Paso</title>
      </Head>

      <NextSeo
        title='El Paso Real Estate - Tools | Peña El Paso'
        description='Peña El Paso is the premier real estate service for buyers, sellers, and investors in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.'
        canonical='https://penaelpaso.com/tools/index'
        openGraph={{
          url: 'https://penaelpaso.com/tools/index',
          title: 'El Paso Real Estate - Tools | Peña El Paso',
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

      <div className={ToolsStyles.tools}>
        {/* TODO: Create drop down accordions */}
        <div className={ToolsStyles.buyers}>
          <div className={ToolsStyles.top}>
            <h1>Buyer Tools</h1>
          </div>
          {/* <p>Strength of Offer Calculator</p> */}
        </div>

        <div className={ToolsStyles.sellers}>
          <div className={ToolsStyles.top}>
            <h1>Seller Tools</h1>
          </div>
          {/* <p>Home Value Request</p> */}
        </div>
      </div>
    </>
  );
}

export default Tools;
