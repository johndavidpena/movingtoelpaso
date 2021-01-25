import Head from 'next/head';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';

const Post = () => (
  <>
    <Head>
      <title>El Paso Real Estate - Sheltering in Place | Peña El Paso</title>
    </Head>

    <NextSeo
      title='El Paso Real Estate - Sheltering in Place | Peña El Paso'
      description='As many people find themselves sheltering in place because of the pandemic, some are re-thinking what they want in a home.'
      canonical='https://penaelpaso.com/blog/posts/shelter-in-place'
      openGraph={{
        url: 'https://penaelpaso.com/blog/posts/shelter-in-place',
        title: 'El Paso Real Estate - Sheltering in Place | Peña El Paso',
        description: 'As many people find themselves sheltering in place because of the pandemic, some are re-thinking what they want in a home.',
        images: [
          {
            url: 'https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png',
            width: 720,
            height: 720,
            alt: 'El Paso Real Estate - Peña El Paso logo',
          },
          {
            url: 'https://media-exp1.licdn.com/dms/image/C5612AQGRIfhPo74Z6w/article-cover_image-shrink_720_1280/0?e=1599696000&v=beta&t=XlepB8dDTJBQf7OZomCsFWWE0gbyWQVJnUKYGj1M5Nk',
            width: 900,
            height: 800,
            alt: 'woman-working-from-home',
          },
          {
            url: 'https://media-exp1.licdn.com/dms/image/C5612AQFXpB0x9pS4_A/article-inline_image-shrink_1000_1488/0?e=1599696000&v=beta&t=Sk-_Qtq96VxYx5iZMVkhfQvkhFXhv05fvicTa3loVRk',
            width: 900,
            height: 800,
            alt: 'indoor-outdoor-space',
          },
        ],
      }}
    />

    <div className={BlogStyles.blog}>
      <div className={BlogStyles.post}>
        <img className={BlogStyles.verticalImage} src='https://media-exp1.licdn.com/dms/image/C5612AQGRIfhPo74Z6w/article-cover_image-shrink_720_1280/0?e=1599696000&v=beta&t=XlepB8dDTJBQf7OZomCsFWWE0gbyWQVJnUKYGj1M5Nk' alt='woman-working-from-home' title='woman-working-from-home' />

        <div className={BlogStyles.postTitle}>
          <h1>Has Sheltering In Place Changed What We Want In Our Homes?</h1>
          <span>June 30, 2020</span>
        </div>
        <ArticleJsonLd
          url="https://penaelpaso.com/blog/posts/shelter-in-place"
          title="Has Sheltering In Place Changed What We Want In Our Homes?"
          images={[
            'https://media-exp1.licdn.com/dms/image/C5612AQGRIfhPo74Z6w/article-cover_image-shrink_720_1280/0?e=1599696000&v=beta&t=XlepB8dDTJBQf7OZomCsFWWE0gbyWQVJnUKYGj1M5Nk',
            'https://media-exp1.licdn.com/dms/image/C5612AQFXpB0x9pS4_A/article-inline_image-shrink_1000_1488/0?e=1599696000&v=beta&t=Sk-_Qtq96VxYx5iZMVkhfQvkhFXhv05fvicTa3loVRk',
          ]}
          datePublished="2020-06-30T08:00:00+08:00"
          authorName="John Pena"
          publisherName="Peña El Paso"
          publisherLogo="https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png"
          description="As many people find themselves sheltering in place because of the pandemic, some are re-thinking what they want in a home."
        />

        <p>The term ‘sheltering in place’ has taken on a whole new meaning as of late and it has also changed the home experience for many. With more companies offering the ability to work remotely and school aged children being home full time, what people want in their homes is changing when it comes to preferences and priorities. Let’s take a look at some of the trends in home renovation and see how many homeowners are adapting their space to better suit their needs.</p>
        <br />
        <p>As many families spend the majority of their time at home nowadays, many are questioning what works, in terms of functionality and design, and what doesn’t work. The square footage of the home, the finite amount of floor space available, is usually the first thing to be re-evaluated. For instance, many homeowners are reapportioning some of that precious square footage to accommodate a home office.</p>
        <br />
        <p>We recently purchased a home with four bedrooms. Before the pandemic, I was leasing office space downtown but had to give up that space and convert one of our bedrooms into my home office. While I was sorry to leave my fellow coworkers downtown, I must admit that being able to “commute” from my bed to my home office in the morning is pretty great! However, the home office does require a bit of interior design consideration for those Zoom meetings. I think we can all relate to the phenomenon of checking out other people’s background during a webinar or online meeting.</p>
        <br />
        <p>Another trend that has picked up steam during these last couple of months is Flex Rooms. A flex room is a space or room that serves multiple functions. This can range from a home gym or yoga space to a kid’s area that is dedicated to studying and homework. A flex room could be the guest bedroom that you’ve converted into your private meditation room, also know as ‘mom needs a timeout’ room.</p>
        <br />
        <img src='https://media-exp1.licdn.com/dms/image/C5612AQFXpB0x9pS4_A/article-inline_image-shrink_1000_1488/0?e=1599696000&v=beta&t=Sk-_Qtq96VxYx5iZMVkhfQvkhFXhv05fvicTa3loVRk' alt='indoor-outdoor-space' title='indoor-outdoor-space' />
        <br />
        <p>If staying at home is the new going out, the already growing outdoor living trend has exploded! Weather permitting, the space outside of the home can be invaluable. Many folks are putting time and money into landscaping, outdoor structures like pergolas and decks, as well as recreation equipment for both kids and adults. The nice thing about outdoor living improvements is that they are relatively affordable, especially if you are willing to put in a little sweat equity.</p>
        <br />
        <p>And finally, sheltering in place has forced many of us to deal with the clutter. Being home more inevitably means more stuff, and that stuff can start to pile up quickly. Consequently, there is a lot more interest in organization for closets, kitchen pantries, garages, outdoor equipment, etc. And while we all can’t be Marie Kondo, a little bit of organization goes a long way. Pinterest is a wealth of information when it comes to home organization and ideas too!</p>
        <br />
        <img src='https://media-exp1.licdn.com/dms/image/C5612AQGbKCCNx4xkeA/article-inline_image-shrink_1000_1488/0?e=1599696000&v=beta&t=SQHi5-MmsayrnSe01Yu-6EVYNxXdVPWAn2Nz7-MvD0U' alt='garage-workshop' title='garage-workshop' />
        <br />
        <p>So, what kind of modifications have you made to your home in the last couple of months?</p>
        <br />
        <br />
      </div>
    </div>
  </>
);

export default Post;
