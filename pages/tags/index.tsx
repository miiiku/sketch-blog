import Link from 'next/link'
import LayoutBody from '../../components/layout-body'
import LayoutSEO from '../../components/layout-seo'
import PagesStyle from '../../styles/Pages.module.css'

import { getSortedTagsData } from '../../lib/posts'

export default function Tags({ tags }: { tags: { tag: string, count: number }[] }) {
  return (
    <>
      <LayoutSEO title='标签' url='/tags' />
      <LayoutBody title='Tags'>
        <div className={PagesStyle.tagsContainer}>
          {
            tags.map(({ tag, count }) => (
              <Link key={tag} href={`/tags/${tag}`}>
                <a className={PagesStyle.tagsItem}>{ tag }({ count })</a>
              </Link>
            ))
          }
        </div>
      </LayoutBody>
    </>
  )
}

export async function getStaticProps() {
  const tags = getSortedTagsData()
  return {
    props: {
      tags
    }
  }
}