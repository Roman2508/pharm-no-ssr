import React from 'react'

import styles from './Select.module.scss'

interface ISelectItemProps {
  classNames?: string
  key?: any
  onClick: () => void
  value: string
}

const SelectItem: React.FC<ISelectItemProps> = ({ classNames, key, onClick, value }) => {
  return (
    <li className={`${styles['select__item']} ${classNames}`} key={key} onClick={onClick}>
      {value}
    </li>
  )
}

export default SelectItem
