import LayoutBody from '../../components/layout-body'
import LayoutSEO from '../../components/layout-seo'
import PostsList from '../../components/posts-list'
import { getAllTags, getTagData } from '../../lib/posts'

export default function Tag({ tag, posts }: { tag: string, posts: { permalink: string, title: string, date: string }[] }) {
  return (
    <>
      <LayoutSEO title={`#${ tag }`} url={`/tags/${tag}`} />
      <LayoutBody title={`#${ tag }`}>
        <PostsList posts={posts} />
      </LayoutBody>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllTags()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
  const posts = getTagData(params.tag)
  return {
    props: {
      tag: params.tag,
      posts
    }
  }
}