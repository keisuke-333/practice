import { FC } from 'react'

import { useQueryNotices } from '../hooks/useQueryNotices'
import Spiner from './Spiner'
import NoticeItem from './NoticeItem'

const NoticeList: FC = () => {
  const { data: notices, status } = useQueryNotices()
  if (status === 'loading') return <Spiner />
  if (status === 'error') return <p>Error</p>
  return (
    <ul className="my-2">
      {notices?.map((notice) => (
        <NoticeItem
          key={notice.id}
          id={notice.id}
          content={notice.content}
          user_id={notice.user_id}
        />
      ))}
    </ul>
  )
}

export default NoticeList
