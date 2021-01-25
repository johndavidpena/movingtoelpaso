import Head from 'next/head';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import VideoStyles from '../../../stylesheets/Video.module.css';

const Post = () => (
  <>
    <Head>
      <title>El Paso Real Estate - El Paso Cost of Living | Peña El Paso</title>
    </Head>

    <NextSeo
      title='El Paso Real Estate - El Paso Cost of Living | Peña El Paso'
      description='This video from our YouTube channel Living in El Paso Texas is all about the unbelievable cost of living. From food to utilities to housing, you absolutely will not believe how affordable it is to live in El Paso Texas.'
      canonical='https://penaelpaso.com/blog/posts/cost-living-el-paso'
      openGraph={{
        url: 'https://penaelpaso.com/blog/posts/cost-living-el-paso',
        title: 'El Paso Real Estate - El Paso Cost of Living | Peña El Paso',
        description: 'This video from our YouTube channel Living in El Paso Texas is about the unbelievable cost of living. From food to utilities to housing, you absolutely will not believe how affordable it is to live in El Paso Texas.',
        images: [
          {
            url: 'https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png',
            width: 720,
            height: 720,
            alt: 'El Paso Real Estate - Peña El Paso logo',
          },
          {
            url: 'https://res.cloudinary.com/mimas-music/image/upload/v1603729314/Living%20In%20El%20Paso%20Texas/cost-living-d.jpg',
            width: 770,
            height: 443,
            alt: 'Cost of Living El Paso Texas',
          }
        ],
      }}
    />

    <div className={BlogStyles.blog}>
      <div className={BlogStyles.post}>
        <div className={VideoStyles.videoResponsive}>
          <iframe title='el paso texas cost of living' width="560" height="315" src="https://www.youtube.com/embed/_AiIxHEYXqI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className={BlogStyles.postTitle}>
          <h1>The Cost of Living in El Paso Texas</h1>
          <span>September 7, 2020</span>
          <ArticleJsonLd
            url='https://penaelpaso.com/blog/posts/cost-living-el-paso'
            title="Cost of Living in El Paso Texas"
            images={[
              'https://res.cloudinary.com/mimas-music/image/upload/v1603729314/Living%20In%20El%20Paso%20Texas/cost-living-d.jpg'
            ]}
            datePublished="2020-09-07"
            authorName="John Pena"
            publisherName="Living in El Paso Texas"
            publisherLogo="https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg"
            description='This video from our YouTube channel Living in El Paso Texas is about the unbelievable cost of living. From food to utilities to housing, you absolutely will not believe how affordable it is to live in El Paso Texas.'
          />
        </div>

        <p>In 2018, El Paso was ranked No. 1, as the city with the lowest cost of living by Forbes Magazine. Forbes put out a list of 13 cities where you can live comfortably on less than $60,000 a year, and El Paso was sitting right at the top!</p>

        <br />

        <p>Check out the affordability of El Paso in the video above! Be sure to check out our YouTube channel, 'Living in El Paso Texas.'</p>
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
