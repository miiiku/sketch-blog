import Link from 'next/link'
import Time from './time'
import LayoutStyle from '../styles/Layout.module.css'

export default function PostsList({ posts }: { posts: { permalink: string; title: string; date: string }[] }) {
  return (
    <table className={LayoutStyle.postsList}>
      <tbody>
        {
          posts.map(({ permalink, title, date }) => (
            <tr key={permalink}>
              <td className={LayoutStyle.postsListComponentsItemDate}>
                <Time date={date} />
              </td>
              <td>
                <Link href={`/posts/${permalink}`}>
                  <a>{title}</a>
                </Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}