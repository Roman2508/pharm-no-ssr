import React from 'react'
import styles from './Slider.module.scss'

interface ISliderArrowProps {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}

const SliderArrow = (props: ISliderArrowProps) => {
  const disabeld = props.disabled ? styles['arrow--disabled'] : ''
  return (
    <div
      onClick={props.onClick}
      className={`${props.left ? styles['arrow--left'] : styles['arrow--right']} ${disabeld}`}
    >
      <svg viewBox="0 0 24 24">
        {props.left && <path fill="#ffffff" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
        {!props.left && <path fill="#ffffff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
      </svg>
    </div>
  )
}

export { SliderArrow }
