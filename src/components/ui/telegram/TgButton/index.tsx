'use client'

import styles from './tg-button.module.scss'

import { forwardRef } from 'react'
import { Button, type ButtonProps } from '@telegram-apps/telegram-ui'

interface TgButtonProps extends ButtonProps {
  className?: string
  style?: React.CSSProperties
}

const TgButton = forwardRef<HTMLButtonElement, TgButtonProps>(({
  className = '',
  style,
  ...props
}, ref) => {
  return (
    <Button
      {...props}
      ref={ref}
      style={style}
      className={`${styles['tg-button']} ${className}`.trim()}
    />
  )
})

TgButton.displayName = 'TgButton'

export { TgButton }