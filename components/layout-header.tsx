import Link from 'next/link';
import Config from '../lib/config';
import layoutStyle from '../styles/Layout.module.css';

export default function LayoutHeader() {
  return (
    <header className={layoutStyle.layoutHeader}>
      <h1 className="hedaer-title">{ Config.title }</h1>
      <div className="header-hitokoto">{ Config.hitokoto }</div>
      <nav>
        <ul className={layoutStyle.layoutHeaderNavList}>
          {
            Config.nav.map((item, index) => {
              return (
                <li key={ index }>
                  <Link href={ item.link }><a>{ item.text }</a></Link>
                </li>
              );
            })
          }
        </ul>
      </nav>

      <div className={ layoutStyle.layoutBanner }>
        <img src={ Config.bannerUrl } alt={ Config.title } />
      </div>
    </header>
  );
}