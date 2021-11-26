import Link from 'next/link'
import LayoutStyle from '../styles/Layout.module.css'

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className={LayoutStyle.tagsComponents}>
      {
        tags.map(tag => {
          return (
            <Link key={tag} href={`/tags/${tag}`}>
              <a className={LayoutStyle.tagsComponentsItem}>#{ tag }</a>
            </Link>
          )
        })
      }
    </div>
  )
}