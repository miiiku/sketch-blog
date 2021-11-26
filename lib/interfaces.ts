interface PostType {
  id?: string;
  fileName?: string;
  permalink: string;
  title: string;
  date: string;
  tags: string[];
  contentHtml?: string;
}
interface LinkType {
  name: string,
  link: string,
  description: string,
}

interface MetaType {
  title?: string;
  keywords?: string[];
  description?: string;
  author?: string;
  url?: string;
  image?: string;
  twitterCard?: string;
  twitterCreator?: string;
}

export type { PostType, LinkType, MetaType };