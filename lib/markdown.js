import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        /** 这里不能换行或者存在换行符等，不然渲染有问题 */
        return  `<pre class="hljs language-${lang}">`     +
                  `<code class="language-${lang}">`       +
                    hljs.highlight(lang, str, true).value +
                  `</code>`                               +
                `</pre>`                                  ;
      } catch (__) {

      }
    }
    return `<pre class="hljs"><code>${str}</code></pre>`; // 使用额外的默认转义
  }
});

const defaultRender = function(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options, env, self);
}

const defaultRenderLink = markdown.renderer.rules.link_open || defaultRender;

const defaultRenderImage = markdown.renderer.rules.image || defaultRender;

markdown.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  tokens[idx].attrPush(['target', '_blank']);
  tokens[idx].attrPush(['rel', 'noopener']);

  // 传递 token 到默认的渲染器。
  return defaultRenderLink(tokens, idx, options, env, self);
}

markdown.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx];
  const srcIndex = token.attrIndex('src');
  const titleIndex = token.attrIndex('title');

  if (titleIndex >= 0) {
    return `
      <figure class="figure-image">
        <img src="${token.attrs[srcIndex][1]}" title="${token.attrs[titleIndex][1]}" alt="${token.content}" loading="lazy" />
        <figcaption>${token.attrs[titleIndex][1]}</figcaption>
      </figure>
    `
  }

  token.attrPush(['loading', 'lazy']);

  return defaultRenderImage(tokens, idx, options, env, self);
}

export default markdown