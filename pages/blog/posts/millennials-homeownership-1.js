import Head from 'next/head';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';

const Post = () => (
  <>
    <Head>
      <title>El Paso Real Estate - Millennials and Homeownership Pt. 1 | Peña El Paso</title>
    </Head>

    <NextSeo
      title='El Paso Real Estate - Millennials and Homeownership Pt. 1 | Peña El Paso'
      description='Are millennials interested in home ownership? This two part blog post explores that question in 2020.'
      canonical='https://penaelpaso.com/blog/posts/millennials-homeownership-1'
      openGraph={{
        url: 'https://penaelpaso.com/blog/posts/millennials-homeownership-1',
        title: 'El Paso Real Estate - Millennials and Homeownership Pt. 1 | Peña El Paso',
        description: 'Are millennials interested in home ownership? This two part blog post explores that question in 2020.',
        images: [
          {
            url: 'https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png',
            width: 720,
            height: 720,
            alt: 'El Paso Real Estate - Peña El Paso logo',
          },
          {
            url: 'https://images.unsplash.com/photo-1508166785545-c2dd4c113c66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            width: 900,
            height: 800,
            alt: 'millennials-taking-selfies',
          },
          {
            url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
            width: 900,
            height: 800,
            alt: 'young-people-working',
          },
        ],
      }}
    />

    <div className={BlogStyles.blog}>
      <div className={BlogStyles.post}>
        <img src='https://images.unsplash.com/photo-1508166785545-c2dd4c113c66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='millennials-taking-selfies' title='millennials-taking-selfies' />

        <div className={BlogStyles.postTitle}>
          <h1>Are Millennials Interested in Homeownership? - Pt. 1</h1>
          <span>July 8, 2020</span>
        </div>
        <ArticleJsonLd
          url="https://penaelpaso.com/blog/posts/millennials-homeownership-1"
          title="Are Millennials Interested in Homeownership? - Pt. 1"
          images={[
            'https://images.unsplash.com/photo-1508166785545-c2dd4c113c66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
          ]}
          datePublished="2020-07-08T08:00:00+08:00"
          authorName="John Pena"
          publisherName="Peña El Paso"
          publisherLogo="https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png"
          description="Are millennials interested in home ownership? This two part blog post explores that question in 2020."
        />

        <p>Millennials make up the generation of adults between the ages of 22 and 39 or those born between 1981 - 1996 roughly. In total, there are roughly 72 million millennials that make up the largest cohort in America. For comparison sake, there are about 65 million Gen Xers out there.</p>
        <br />
        <p>We are on the brink of a wave of millennials coming into their 30’s now which is around the time that many start thinking about marriage and families and...wait for it...their first home! However, many millennials have been holding back on these traditional norms for quite some time and the question is, why?</p>
        <br />
        <img src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80' alt='young-people-working' title='young-people-working' />
        <br />
        <p>Well, not surprisingly, millennials are different from other generations. According to an article in Business Insider, here are 5 ways that millennials are different from previous generations. Number one, they are more comfortable living in cities than suburbs. Two, they want to get more meaning and purpose out of work. Three, they are more health-conscious. Four, they have less money than their parents and slower to buy homes. And finally, they are putting off marriage longer than previous generations.</p>
        <br />
        <p>Now, if you have millennial children like I do, chances are, some or all of those will resonate with you. They certainly do with me! But in regards to owning a home, for people under the age of 35, the homeownership rate is much lower than it used to be. So, if that is true, where are all of the millennials living? You guessed it, in rentals or at home with their parents.</p>
        <br />
        <img src='https://images.unsplash.com/photo-1590782937821-b30244c19ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='baby-birds-crying' title='baby-birds-crying' />
        <br />
        <p>In 2005 there were roughly 10% of young adults aged 25 - 34 living with their parents, but that has steadily increased ever since, and is currently at 16%. This is about 3.6 million more young people living under their parent’s roof.</p>
        <br />
        <p>The next question then is, will these millennials move out and buy their own home? Many believe the answer to this question is no and suggest the following two reasons for this belief. Number one, mobility - millennials don’t want to be tied to a home because they are more likely to move for work or pleasure. And number two, while most were too young to be homeowners when the housing bubble burst in 2008, many watched their parents suffer through it.</p>
        <br />
        <p>However, there are others that believe yes, that millennials do want to buy homes. It’s just that they are marrying later and haven’t arrived at that point in their lives yet. Additionally, studies suggest that many young people still view homeownership as an important life goal that is still a large part of the American dream.</p>
        <br />
        <p>So, what do you think? Are millennials really into the whole homeownership thing or not? Stay tuned next time, where we’ll wrap up the topic and see what the experts think!</p>
        <br />
        <br />
      </div>
    </div>
  </>
);

export default Post;
