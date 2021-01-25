import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import BlogStyles from '../../stylesheets/Blog.module.css';

const Blog = () => (
  <>
    <Head>
      <title>El Paso Real Estate - Blog | Peña El Paso</title>
    </Head>

    <NextSeo
      title='El Paso Real Estate - Blog | Peña El Paso'
      description='The blog features lifestyle, community, and real estate trends that are happening in El Paso and the country. John Peña also has a Youtube channel called "Living in El Paso Texas" that showcases our amazing city and community. El Paso real estate is our passion and expertise.'
      canonical='https://penaelpaso.com/blog/index'
      openGraph={{
        url: 'https://penaelpaso.com/blog/index',
        title: 'El Paso Real Estate - Blog | Peña El Paso',
        description: 'The blog features lifestyle, community, and real estate trends that are happening in El Paso and the country. John Peña also has a Youtube channel called "Living in El Paso Texas" that showcases our amazing city and community. El Paso real estate is our passion and expertise.',
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
      <h1>Welcome to the blog!</h1>

      <Link href='/blog/posts/cost-living-el-paso'>
        <div className={BlogStyles.card}>
          <span>September 7, 2020</span>
          <p>What's the Cost of Living in El Paso Texas?</p>
          <span>#elpasotexas #elpasocostofliving #livinginelpasotexas</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1603729825/Pe%C3%B1a%20El%20Paso/Blog/cost-living-updated-522.jpg' alt='el-paso-cost-of-living' title='el-paso-cost-of-living' />

          <h2>El Paso Cost of Living</h2>
          <p>Here's a video from our YouTube channel, 'Living In El Paso Texas' and you won't believe the cost of living here!</p>
        </div>
      </Link>

      <Link href='/blog/posts/west-side-el-paso' >
        <div className={BlogStyles.card}>
          <span>August 28, 2020</span>
          <p>The West Side of El Paso</p>
          <span>#elpasotexas #movetoelpaso #livinginelpasotexas</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598636197/Pe%C3%B1a%20El%20Paso/Blog/west-side-thumb-522.jpg' alt='west-side-of-el-paso' title='west-side-of-el-paso' />

          <h2>Check out the west side of El Paso!</h2>
          <p>Here's a video from our YouTube channel, 'Living In El Paso Texas' that's all about the west side.</p>
        </div>
      </Link>

      <Link href='/blog/posts/east-side-el-paso' >
        <div className={BlogStyles.card}>
          <span>August 20, 2020</span>
          <p>The East Side of El Paso</p>
          <span>#elpasotexas #movetoelpaso #livinginelpasotexas</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597934360/Pe%C3%B1a%20El%20Paso/Blog/east-side-el-paso.jpg' alt='east-side-of-el-paso' title='east-side-of-el-paso' />

          <h2>Check out the east side of El Paso!</h2>
          <p>Here's a video from our YouTube channel, 'Living In El Paso Texas' that's all about the east side.</p>
        </div>
      </Link>

      <Link href='/blog/posts/millennials-homeownership-2' >
        <div className={BlogStyles.card}>
          <span>July 28, 2020</span>
          <p>Millennials and homeownership in America.</p>
          <span>#millenials #homeownership #generations</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597531003/Pe%C3%B1a%20El%20Paso/Blog/millennials-making-heart-hands.jpg' alt='millennials-making-heart-hands' title='millennials-making-heart-hands' />

          <h2>Are Millennials Interested in Homeownership? - Pt. 2</h2>
          <p>In part 1 on this topic, we explored the idea of millennials and their relationship with homeownership. And while this...</p>
        </div>
      </Link>

      <Link href='/blog/posts/el-paso-location' >
        <div className={BlogStyles.card}>
          <span>July 24, 2020</span>
          <p>What El Paso Texas' Geography Has to Offer You</p>
          <span>#elpasotexas #movetoelpaso #livinginelpasotexas</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597531390/Pe%C3%B1a%20El%20Paso/Blog/living-in-el-paso-episode-2jpg.jpg' alt='living-in-el-paso-episode-2' title='living-in-el-paso-episode-2' />

          <h2>Curious about El Paso Texas?</h2>
          <p>Here's a video from our YouTube channel, 'Living In El Paso Texas' that's all about where El Paso is geographically.</p>
        </div>
      </Link>

      <Link href='/blog/posts/why-we-moved-el-paso' >
        <div className={BlogStyles.card}>
          <span>July 20, 2020</span>
          <p>Top 5 Reasons Why We Moved to El Paso Texas</p>
          <span>#elpasotexas #movetoelpaso #livinginelpasotexas</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597531194/Pe%C3%B1a%20El%20Paso/Blog/living-in-el-paso-episode-1.jpg' alt='living-in-el-paso-episode-1' title='living-in-el-paso-episode-1' />

          <h2>We moved to El Paso Texas and love it!</h2>
          <p>Here's a video from our YouTube channel, 'Living In El Paso Texas' that's all about why we moved here.</p>
        </div>
      </Link>

      <Link href='/blog/posts/millennials-homeownership-1' >
        <div className={BlogStyles.card}>
          <span>July 8, 2020</span>
          <p>Millennials and homeownership in America.</p>
          <span>#millenials #homeownership #generations</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597530835/Pe%C3%B1a%20El%20Paso/Blog/millennials-posing-for-selfie.jpg' alt='millennials-posing-for-selfie' title='millennials-posing-for-selfie' />

          <h2>Are Millennials Interested in Homeownership? - Pt. 1</h2>
          <p>Millennials make up the generation of adults between the ages of 22 and 39 or those born between 1981 - 1996 roughly...</p>
        </div>
      </Link>

      <Link href='/blog/posts/shelter-in-place' >
        <div className={BlogStyles.card}>
          <span>June 30, 2020</span>
          <p>Has sheltering in place changed the way that you use your home?</p>
          <span>#shelteringinplace #homedesign #diyhome</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597531524/Pe%C3%B1a%20El%20Paso/Blog/stay-at-home.jpg' alt='stay-at-home' title='stay-at-home' />

          <h2>Has Sheltering In Place Changed What We Want In Our Homes?</h2>

          <p>The term ‘sheltering in place’ has taken on a whole new meaning as of late and it has also changed the home...</p>
        </div>
      </Link>

      <Link href='/blog/posts/working-from-home' >
        <div className={BlogStyles.card}>
          <span>June 12, 2020</span>
          <p>Working from home and how it might influence where people choose to live.</p> <span>#workingfromhome #relocate #makeamove</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597530835/Pe%C3%B1a%20El%20Paso/Blog/nice-home-exterior.jpg' alt='nice-home-exterior' title='nice-home-exterior' />

          <h2>Is Working From Home Changing Where We Can Live?</h2>
          <p>Imagine that you are living in or around Silicon Valley in order to go to work. This area is extremely expensive...</p>
        </div>
      </Link>
    </div>
  </>
);

export default Blog;
