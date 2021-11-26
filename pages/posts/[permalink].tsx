import type { PostType } from '../../lib/interfaces'
import LayoutBody from '../../components/layout-body'
import LayoutSEO from '../../components/layout-seo'
import Time from '../../components/time'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ post }: { post: PostType }) {
  return (
    <>
      <LayoutSEO title={post.title} keywords={post.tags} url={`/post/${post.permalink}`} />
      <LayoutBody title={ post.title }>
        <div className='postTime'>
          <Time date={post.date} />
        </div>
        <div className='postContent md-container' dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}></div>
      </LayoutBody>
    </>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { permalink: string } }) {
  // Fetch necessary data for the blog post using params.permalink
  const post = getPostData(params.permalink)
  return {
    props: {
      post
    }
  }
}