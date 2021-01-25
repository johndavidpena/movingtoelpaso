import Head from 'next/head';
import { NextSeo } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import VideoStyles from '../../../stylesheets/Video.module.css';

const Post = () => (
  <>
    <Head>
      <title>El Paso Real Estate - East Side of El Paso | Peña El Paso</title>
    </Head>

    <NextSeo
      title='El Paso Real Estate - East Side of El Paso | Peña El Paso'
      description='The Franklin Mountains split El Paso into the west and east sides. This video from our Youtube channel "Living in El Paso Texas" is all about the sights and sounds of the east side.'
      canonical='https://penaelpaso.com/blog/posts/east-side-el-paso'
      openGraph={{
        url: 'https://penaelpaso.com/blog/posts/east-side-el-paso',
        title: 'El Paso Real Estate - East Side of El Paso | Peña El Paso',
        description: 'The Franklin Mountains split El Paso into the west and east sides. This video from our Youtube channel "Living in El Paso Texas" is all about the sights and sounds of the east side.',
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
          <iframe title='east-side-el-paso' width="560" height="315" src="https://www.youtube.com/embed/etDRhU33DDU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className={BlogStyles.postTitle}>
          <h1>The East Side of El Paso Texas</h1>
          <span>August 20, 2020</span>
        </div>

        <p>Check out the east side of El Paso!</p>
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
