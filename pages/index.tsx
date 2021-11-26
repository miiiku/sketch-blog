import type { PostType } from '../lib/interfaces'
import Link from 'next/link'
import LayoutBody from '../components/layout-body'
import Tags from '../components/tags'
import Time from '../components/time'
import LayoutSEO from '../components/layout-seo'
import { getLastPostsData } from '../lib/posts'
import PagesStyle from '../styles/Pages.module.css'

export default function Home ({ posts }: { posts: PostType[] }) {
  return (
    <>
      <LayoutSEO />
      <LayoutBody>
        <div className={PagesStyle.homePostsGrid}>
          {
            posts.map(({ permalink, title, date, tags = [] }) => {
              return (
                <section key={permalink} className={PagesStyle.homePostsItem}>
                  <h2 className={PagesStyle.homePostsTitle}>
                    <Link href={`/posts/${permalink}`}>
                      <a>{title}</a>
                    </Link>
                  </h2>
                  <Tags tags={tags} />
                  <Time date={date} />
                </section>
              )
            })
          }
        </div>
      </LayoutBody>
    </>
  )
}

export async function getStaticProps() {
  const posts = getLastPostsData()
  return {
    props: {
      posts
    }
  }
}