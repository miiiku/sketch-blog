import LayoutBody from '../../components/layout-body';
import LayoutSEO from '../../components/layout-seo';

export default function About() {
  return (
    <>
      <LayoutSEO title='关于' url='/about' />
      <LayoutBody title='About'>
        <p>小而美 ---张小龙</p>
        <br />
        <p>当你看到这个页面的时候，那么表示你正在看这个页面。</p>
        <p>记得上次更新博客样式的时候，好像还是在上次。</p>
        <p>这一次用的是React+Next，下一次会用啥，下一次才知道。</p>
        <br />
        <br />
        <p>OK！</p>
        <p>兄弟们全体目光向我看齐嗷</p>
        <p>看我看我</p>
        <p>我宣布个事</p>
        <p>“我是个SB”</p>
        <p>没毛病嗷</p>
        <br />
        <br />
        <p>啊，别打我！</p>
      </LayoutBody>
    </>
  );
}
