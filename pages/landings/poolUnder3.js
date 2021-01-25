import Head from 'next/head';
import LandingStyles from '../../stylesheets/Landing.module.css';
import { useState } from 'react';
import LandingForm from '../../components/Forms/LandingForm';

const Home = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <Head>
        <title>Welcome Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video playsInline autoPlay muted loop poster='https://res.cloudinary.com/mimas-music/image/upload/v1593219130/Pe%C3%B1a%20El%20Paso/skyPoster.jpg' className={LandingStyles.video}>
        {/* <source src="polina.webm" type="video/webm" /> */}
        <source src='https://res.cloudinary.com/mimas-music/video/upload/v1593115777/Blue_Sky_Video.mp4' type="video/mp4" />
      </video>

      <div className={LandingStyles.container}>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1591641576/Pe%C3%B1a%20El%20Paso/720checkeredOrange.png' alt="Peña El Paso logo" />

        <div className={LandingStyles.mainSection}>
          {showForm && (
            <div className={LandingStyles.mainContent}>
              <h1>See the listings!</h1>
              <LandingForm showForm={showForm} setShowForm={setShowForm} />
            </div>
          )}

          {!showForm && (
            <div className={LandingStyles.thankyou}>
              <h2>Thank You!</h2>
              <br />
              <p>Click the link below to view all of the homes under $300,000 WITH a pool!</p>
              <br />
              <a href='https://bit.ly/39LrRxt' target='_blank'>CLICK HERE</a>
              <br />
              <p>Peña El Paso strives to go <i>Above and Beyond</i> for all of our clients.</p>
            </div>
          )}
        </div>

        <footer className={LandingStyles.footer}>
          <a href='https://drive.google.com/file/d/1dnGCj8szdMqM0RDDAalvKZ-QIbI4QSYa/view?usp=sharing'>CPN</a>
          <a href='https://drive.google.com/file/d/1zSlxg8JSjHTp1BpzgFxXeEFhOEOch3XT/view?usp=sharing'>IABS</a>
        </footer>
      </div>
    </>
  );
}

export default Home;
