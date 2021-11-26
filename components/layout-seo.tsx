import Head from 'next/head';
import config from '../lib/config';

interface MetaInfo {
  title?: string;
  keywords?: string[];
  description?: string;
  author?: string;
  url?: string;
  image?: string;
  twitterCard?: string;
  twitterCreator?: string;
}

export default function LayoutSEO({ title, url = '', keywords = [], description }: MetaInfo) {
  const seoInfo = {
    title: title ? `${title} | ${config.title}` : config.title,
    url: `${config.baseUrl}${url}`,
    description: description || config.description,
    keywords: (keywords || config.keywords).join(','),
    author: config.author.name,
    image: config.bannerUrl,
    twitterCard: config.twitter.card,
    twitterCreator: config.twitter.creator,
  }
  
  return (
    <Head>
      <title>{ seoInfo.title }</title>
      <meta name="author" content={ seoInfo.author }></meta>
      <meta name="keywords" content={ seoInfo.keywords }></meta>
      <meta name="description" content={ seoInfo.description } />
      <meta property="og:url" content={ seoInfo.url } />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ seoInfo.image } />
      <meta property="og:title" content={ seoInfo.title } />
      <meta property="og:description" content={ seoInfo.description } />
      <meta name="twitter:card" content={ seoInfo.twitterCard } />
      <meta name="twitter:site" content={ seoInfo.twitterCreator } />
      <meta name="twitter:title" content={ seoInfo.title } />
      <meta name="twitter:description" content={ seoInfo.description } />
      <meta name="twitter:image" content={ seoInfo.image } />
    </Head>
  )
}