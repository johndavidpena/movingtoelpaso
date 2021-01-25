import Head from 'next/head';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import ContactStyles from '../stylesheets/Contact.module.css';
import ContactForm from '../components/Forms/ContactForm';

const Contact = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <Head>
        <title>El Paso Real Estate | Contact Peña El Paso</title>
      </Head>

      <NextSeo
        title='El Paso Real Estate | Contact Peña El Paso'
        description='Peña El Paso is the premier real estate service for buyers, sellers, and investors in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.'
        canonical='https://penaelpaso.com/contact'
        openGraph={{
          url: 'https://penaelpaso.com/contact',
          title: 'El Paso Real Estate | Contact Peña El Paso',
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

      <div className={ContactStyles.contact}>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1589400490/Pe%C3%B1a%20El%20Paso/narrowKitchen.jpg' alt='luxury-kitchen' title='luxury-kitchen' />

        {showForm && (
          <div className={ContactStyles.form}>
            <h1>Contact Us</h1>
            <ContactForm showForm={showForm} setShowForm={setShowForm} />
          </div>
        )}

        {!showForm && (
          <div className={ContactStyles.thankyou}>
            <h2>Thank You</h2>
            <p>Someone from our team will get back to you soon!</p>
            <p>You can also get in touch with us immediately by clicking the Facebook Messenger icon in the lower right corner of your screen.</p>
          </div>
        )}

      </div>
    </>
  );
}

export default Contact;
