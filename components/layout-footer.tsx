import config from '../lib/config';
import LayoutStyle from '../styles/Layout.module.css';

enum Theme {
  Light = 'theme-light',
  Dark = 'theme-dark',
  Auto = 'theme-auto',
}

export default function LayoutFooter() {
  const html = document.querySelector('html');
  const theme = window.localStorage.getItem('theme');

  const handlerTheme = (theme:Theme) => {
    if (!html) return;
    switch (theme) {
      case Theme.Light:
        html.classList.add(Theme.Light);
        html.classList.remove(Theme.Dark);
        break;
      case Theme.Dark:
        html.classList.add(Theme.Dark);
        html.classList.remove(Theme.Light);
        break;
      default:
        html.classList.remove(Theme.Light);
        html.classList.remove(Theme.Dark);
        break;
    }
    window.localStorage.setItem('theme', theme);
  }
  
  if (theme === Theme.Light && html) {
    html.classList.add(Theme.Light);
  }
  if (theme === Theme.Dark && html) {
    html.classList.add(Theme.Dark);
  }

  return (
    <footer className={LayoutStyle.footer}>
      <div className={LayoutStyle.footerInner}>
        <div className={LayoutStyle.footerTheme}>
          <a className={LayoutStyle.footerThemeItem} id="theme-light" onClick={() => handlerTheme(Theme.Light)}>
            <svg className={LayoutStyle.footerThemeItemSvg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <path d="M298.7 676.2l-52.3 52.3c-9.6 9.6-9.6 25.3 0 34.9 9.6 9.6 25.3 9.6 34.9 0l52.3-52.3c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0z m-15-372.7c9.7 9.7 25.5 9.7 35.2 0 9.7-9.7 9.7-25.5 0-35.2l-52.8-52.8c-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2l52.8 52.8z m-69.9 168.8h-74.7c-13.8 0-24.9 11.1-24.9 24.9 0 13.8 11.2 24.9 24.9 24.9h74.7c13.8 0 24.9-11.1 24.9-24.9 0-13.7-11.2-24.9-24.9-24.9z m298.8-249c13.8 0 24.9-11.1 24.9-24.9v-74.7c0-13.8-11.1-24.9-24.9-24.9s-24.9 11.1-24.9 24.9v74.7c0 13.8 11.2 24.9 24.9 24.9z m239.6 69.2l52.3-52.3c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0l-52.3 52.3c-9.6 9.6-9.6 25.3 0 34.9 9.6 9.7 25.3 9.7 34.9 0z m133.9 179.8h-74.7c-13.8 0-24.9 11.1-24.9 24.9 0 13.8 11.1 24.9 24.9 24.9h74.7c13.8 0 24.9-11.1 24.9-24.9 0-13.7-11.1-24.9-24.9-24.9zM741.5 690.9c-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2l52.8 52.8c9.7 9.7 25.5 9.7 35.2 0 9.7-9.7 9.7-25.5 0-35.2l-52.8-52.8zM512.6 273c-123.9 0-224.3 100.4-224.3 224.3s100.4 224.3 224.3 224.3 224.3-100.4 224.3-224.3S636.5 273 512.6 273z m0 498.1c-13.8 0-24.9 11.1-24.9 24.9v74.7c0 13.8 11.1 24.9 24.9 24.9s24.9-11.1 24.9-24.9V796c0-13.7-11.1-24.9-24.9-24.9z"></path>
            </svg>
            <span>light</span>
          </a>
          <a className={LayoutStyle.footerThemeItem} id="theme-dark" onClick={() => handlerTheme(Theme.Dark)}>
            <svg className={LayoutStyle.footerThemeItemSvg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <path d="M505.4 878.6c-196.7 0-358-150.9-374.9-343.1 1-18.6 16.1-33.4 34.9-33.4 10.8 0 20.5 4.8 26.9 12.4 0.2 0.3 0.5 0.1 0.5-0.7 41.6 44.2 100.5 71.9 166.1 71.9 127.1 0 230.1-103 230.1-230.1 0-66.1-28-125.1-72.6-166.8 0.1-0.1 0.5-0.1 0.3-0.3-7-6.5-11.4-15.7-11.4-26.1 0-19 14.9-34.1 33.7-35.3 192.1 17.1 342.9 178.3 342.9 375 0 208-168.5 376.5-376.5 376.5z"></path>
            </svg>
            <span>dark</span>
          </a>
          <a className={LayoutStyle.footerThemeItem} id="theme-auto" onClick={() => handlerTheme(Theme.Auto)}>
            <svg className={LayoutStyle.footerThemeItemSvg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <path d="M640 307.2h-85.333333V234.666667c38.4-17.066667 64-55.466667 64-98.133334 0-59.733333-46.933333-106.666667-106.666667-106.666666S405.333333 81.066667 405.333333 136.533333c0 42.666667 25.6 81.066667 64 98.133334v72.533333H384c-153.6 0-277.333333 123.733333-277.333333 277.333333s123.733333 277.333333 277.333333 277.333334h256c153.6 0 277.333333-123.733333 277.333333-277.333334S793.6 307.2 640 307.2z m-128-187.733333c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333-21.333333-8.533333-21.333333-21.333333 8.533333-21.333333 21.333333-21.333333z m128 657.066666H384c-106.666667 0-192-85.333333-192-192s85.333333-192 192-192h256c106.666667 0 192 85.333333 192 192s-85.333333 192-192 192z"></path>
              <path d="M362.666667 460.8c-72.533333 0-128 55.466667-128 128s55.466667 128 128 128 128-55.466667 128-128-55.466667-128-128-128z m0 170.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667s17.066667-42.666667 42.666667-42.666667 42.666667 17.066667 42.666666 42.666667-17.066667 42.666667-42.666666 42.666667zM661.333333 460.8c-72.533333 0-128 55.466667-128 128s55.466667 128 128 128 128-55.466667 128-128-55.466667-128-128-128z m0 170.666667c-25.6 0-42.666667-17.066667-42.666666-42.666667s17.066667-42.666667 42.666666-42.666667 42.666667 17.066667 42.666667 42.666667-17.066667 42.666667-42.666667 42.666667zM42.666667 460.8c-25.6 0-42.666667 17.066667-42.666667 42.666667v170.666666c0 25.6 17.066667 42.666667 42.666667 42.666667s42.666667-17.066667 42.666666-42.666667v-170.666666c0-25.6-17.066667-42.666667-42.666666-42.666667zM981.333333 460.8c-25.6 0-42.666667 17.066667-42.666666 42.666667v170.666666c0 25.6 17.066667 42.666667 42.666666 42.666667s42.666667-17.066667 42.666667-42.666667v-170.666666c0-25.6-17.066667-42.666667-42.666667-42.666667zM857.6 904.533333H166.4c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666667h691.2c25.6 0 42.666667-17.066667 42.666667-42.666667s-21.333333-42.666667-42.666667-42.666667z"></path>
            </svg>
            <span>auto</span>
          </a>
        </div>

        { config.beian && <div className="footerBeian"><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">{ config.beian }</a></div> }
      </div>
    </footer>
  )
}