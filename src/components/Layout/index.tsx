import { memo, ReactNode, VFC } from 'react'

import Header from './Header'

type Props = {
  children: ReactNode
}

const Layout: VFC<Props> = memo(({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
})

export default Layout