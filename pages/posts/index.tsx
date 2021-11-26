import type { PostType } from '../../lib/interfaces'
import LayoutBody from '../../components/layout-body'
import LayoutSEO from '../../components/layout-seo'
import PostsList from '../../components/posts-list'
import { getSortedPostsData } from '../../lib/posts'

export default function Posts({ posts }: { posts: PostType[] }) {
  return (
    <>
      <LayoutSEO title='归档' url='/posts' />
      <LayoutBody title='posts'>
        <PostsList posts={ posts } />
      </LayoutBody>
    </>
  )
}

export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}