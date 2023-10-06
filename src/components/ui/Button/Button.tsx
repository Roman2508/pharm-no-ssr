import React from 'react'

import styles from './Button.module.scss'
import Link from 'next/link'

interface IButtonProps {
  children: string
  disabled?: boolean
  link?: string
  isLink?: boolean
  width?: string
}

const Button: React.FC<IButtonProps> = ({ children, disabled, link, isLink = false, width = '100%' }) => {
  if (isLink) {
    return (
      <Link href={'/' + link} className={styles['button']} style={{ width: width }}>
        {children}
      </Link>
    )
  } else {
    return (
      <button className={styles['button']} style={{ width: width }} disabled={disabled} type="submit">
        {children}
      </button>
    )
  }
}

export default Button
