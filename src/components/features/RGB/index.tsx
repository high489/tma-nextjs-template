import styles from './rgb.module.scss'

import type { RGB as RGBType } from '@telegram-apps/sdk-react'
import type { FC } from 'react'

import { classNames } from '@styles'

type RGBProps = JSX.IntrinsicElements['div'] & {
  color: RGBType
}

export const RGB: FC<RGBProps> = ({ color, className, ...rest }) => (
  <span {...rest} className={classNames(styles['rgb'], className)}>
    <i className={styles['icon']} style={{ backgroundColor: color }} />
    {color}
  </span>
)