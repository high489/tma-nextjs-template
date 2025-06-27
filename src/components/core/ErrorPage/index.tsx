'use client'

import styles from './error-page.module.scss'

import { FC, useEffect } from 'react'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset?: () => void
}

const ErrorPage: FC<ErrorPageProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles['error-page']}>
      <h2>An unhandled error occurred!</h2>
      <blockquote>
        <code>{error.message}</code>
      </blockquote>
      {reset && <button onClick={reset}>Try again</button>}
    </div>
  )
}

export { ErrorPage }