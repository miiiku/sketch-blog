import dayjs from 'dayjs'

export default function Time({ date }: { date: string }) {
  return (
    <time style={{ color: 'var(--theme-text-low)' }} dateTime={date}>
      { dayjs(date).format('MMM DD, YYYY') }
    </time>
  )
}