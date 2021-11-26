import Script from 'next/script'
import config from '../lib/config';

export default function LayoutAnalytics() {

  const scripts = []

  /** 百度统计 */
  if (config.analytics && config.analytics.baidu) {
    scripts.push(<Script id="baidu" key="baidu" strategy="afterInteractive" src={`https://hm.baidu.com/hm.js?${ config.analytics.baidu }`} />)
  }

  /** 谷歌统计 */
  if (config.analytics && config.analytics.google) {
    scripts.push(<Script id="google" key="google" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${ config.analytics.google }`} />)
    scripts.push(<Script id="googlecode" key="googlecode" dangerouslySetInnerHTML={{ 
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ config.analytics.google }', {
            page_path: window.location.pathname,
          });
        `
      }}
    />)
  }

  return <>{ scripts }</>
}