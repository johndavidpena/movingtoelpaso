import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../utils/gtag';

// The < Head /> component used here is not the same one from next / head.The < Head /> component used here should only be used for any < head > code that is common for all pages.For all other cases, such as <title> tags, we recommend using next / head in your pages or components.

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* For PINTEREST */}
          <meta name="p:domain_verify" content="0a13b492741c459b2cd89734660e104a" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}