import Head from 'next/head';
import { NextSeo } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import VideoStyles from '../../../stylesheets/Video.module.css';

const Post = () => (
  <>
    <Head>
      <title>El Paso Real Estate - Why We Moved to El Paso Texas | Peña El Paso</title>
    </Head>

    <NextSeo
      title='El Paso Real Estate - Why We Moved to El Paso Texas | Peña El Paso'
      description='This first video from our Youtube channel "Living in El Paso Texas" is all about the top 5 reasons why we moved to El Paso.'
      canonical='https://penaelpaso.com/blog/posts/why-we-moved-el-paso'
      openGraph={{
        url: 'https://penaelpaso.com/blog/posts/why-we-moved-el-paso',
        title: 'El Paso Real Estate - Why We Moved to El Paso Texas | Peña El Paso',
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

    <div className={BlogStyles.blog}>
      <div className={BlogStyles.post}>
        <div className={VideoStyles.videoResponsive}>
          <iframe title='Top 5 Reasons Why We Moved to El Paso Texas' width="560" height="315" src='https://www.youtube.com/embed/MqKJ3L8XDVA' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className={BlogStyles.postTitle}>
          <h1>Top 5 Reasons Why We Moved to El Paso Texas</h1>
          <span>July 20, 2020</span>
        </div>

        <p>We love El Paso, check out the video to see some of the many reasons why we chose to relocate here.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </>
);

export default Post;
