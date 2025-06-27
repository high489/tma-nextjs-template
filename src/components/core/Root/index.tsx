'use client'

import styles from './root.module.scss'

import { FC, type PropsWithChildren } from 'react'

import { useDidMount } from '@hooks'
import { ErrorBoundary, ErrorPage } from '@components'
import { RootInner } from './RootInner'

const Root: FC<PropsWithChildren> = (props) => {
  // Telegram Mini Apps does not allow us to use all features of SSR
  // That's why we are showing loader on the server side
  const didMount = useDidMount()

  return didMount
  ? (<ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>)
  // Delay rendering until client-side mount due to Telegram Mini Apps SSR limitations  
  : (<div className={styles['root-loading']}>Loading</div>)
}

export { Root }