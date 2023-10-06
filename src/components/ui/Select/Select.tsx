import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import styles from './Select.module.scss'
import searchIcon from '../../../../public/assets/icons/select-arrow.svg'
import { RefCallBack } from 'react-hook-form'

interface ISelectProps {
  children: string | JSX.Element | JSX.Element[]
  error?: boolean
  inputRef?: RefCallBack
  label?: string
  activeItem: string
  width?: string
  isSubmitting?: boolean
}

const Select: React.FC<ISelectProps> = ({ children, activeItem, error, label, inputRef, width = '100%' }) => {
  const selectRef = React.useRef<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = React.useState(false)

  const onClose = React.useCallback((event: MouseEvent) => {
    const _event = event as MouseEvent & { path: Node[] }

    if (selectRef.current && !(_event.path || _event.composedPath()).includes(selectRef.current)) {
      setIsOpen(false)
    }
  }, [])

  React.useEffect(() => {
    document.body.addEventListener('click', onClose)

    return () => {
      document.body.removeEventListener('click', onClose)
    }
  }, [])

  return (
    <div className={cn(styles['select'], { [styles['is-active']]: isOpen })} style={{ width }}>
      <div
        className={cn(styles['select__head'], { [styles['error']]: error })}
        onClick={() => setIsOpen(!isOpen)}
        ref={selectRef}
      >
        <span className={styles['select__current']}>{activeItem || label}</span>
        <div className={styles['select__icon']}>
          <Image src={searchIcon} width={20} height={20} alt="arrow icon" />
        </div>
      </div>

      {error && <p className={styles['error-message']}>Виберіть тему повідомлення</p>}

      <ul className={cn(styles['select__body'], { [styles['is-active']]: isOpen })} ref={inputRef}>
        {children}
      </ul>
    </div>
  )
}

export default Select
