import Head from 'next/head';
import { NextSeo } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import VideoStyles from '../../../stylesheets/Video.module.css';

const Post = () => (
  <>
    <Head>
      <title>El Paso Real Estate - Locating El Paso | Peña El Paso</title>
    </Head>

    <NextSeo
      title='El Paso Real Estate - Locating El Paso | Peña El Paso'
      description='El Paso Texas is located in west Texas on the border with New Mexico and Mexico. This video from our Youtube channel "Living in El Paso Texas" is all about our location and geography.'
      canonical='https://penaelpaso.com/blog/posts/el-paso-location'
      openGraph={{
        url: 'https://penaelpaso.com/blog/posts/el-paso-location',
        title: 'El Paso Real Estate - Locating El Paso | Peña El Paso',
        description: 'El Paso Texas is located in west Texas on the border with New Mexico and Mexico. This video from our Youtube channel "Living in El Paso Texas" is all about our location and geography.',
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
          <iframe title="What El Paso Texas' Geography Has to Offer You" width="560" height="315" src="https://www.youtube.com/embed/NSnTYqDHzIc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className={BlogStyles.postTitle}>
          <h1>What El Paso Texas' Geography Has to Offer You</h1>
          <span>July 24, 2020</span>
        </div>

        <p>We love El Paso, check out the video to see exactly where El Paso is and what is has to offer geographically!</p>
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
