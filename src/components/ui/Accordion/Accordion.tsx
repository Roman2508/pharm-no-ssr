import React from 'react'
import cn from 'classnames'

import styles from './Accordion.module.scss'

interface IAccordionProps {
  title: string
  defaultOpen?: boolean
  children: JSX.Element | JSX.Element[] | string | string[]
}

export const Accordion: React.FC<React.PropsWithChildren<IAccordionProps>> = ({
  defaultOpen = false,
  children,
  title,
}) => {
  const accordionRef = React.useRef<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = React.useState<boolean>(defaultOpen)

  const _slideUp = (target: HTMLDivElement, duration = 500) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide')
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.height = target.offsetHeight + 'px'
      target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = '0'
      target.style.paddingTop = '0'
      target.style.paddingBottom = '0'
      target.style.marginTop = '0'
      target.style.marginBottom = '0'
      window.setTimeout(() => {
        target.hidden = true
        target.style.removeProperty('height')
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        target.classList.remove('_slide')
      }, duration)
    }
  }
  const _slideDown = (target: HTMLDivElement, duration = 500) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide')
      if (target.hidden) {
        target.hidden = false
      }
      let height = target.offsetHeight

      target.style.overflow = 'hidden'
      target.style.height = '0'
      target.style.paddingTop = '0'
      target.style.paddingBottom = '0'
      target.style.marginTop = '0'
      target.style.marginBottom = '0'
      target.offsetHeight
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.height = height + 'px'

      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')

      window.setTimeout(() => {
        target.style.removeProperty('height')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        target.classList.remove('_slide')
      }, duration)
    }
  }
  const _slideToggle = (target: HTMLDivElement, duration = 500) => {
    if (target.hidden) {
      return _slideDown(target, duration)
    } else {
      return _slideUp(target, duration)
    }
  }

  React.useEffect(() => {
    if (!accordionRef.current) {
      return
    }

    if (isOpen) {
      _slideDown(accordionRef.current)
    } else {
      _slideUp(accordionRef.current)
    }
  }, [isOpen])

  return (
    <div className={styles['accordion-block']} data-accordion>
      <div className={cn(styles['accordion-item'])}>
        <button
          className={cn(styles['accordion-title'], { [styles['accordion-active']]: isOpen })}
          tabIndex={-1}
          data-accordion-item
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </button>
        <div className={cn(styles['accordion-text'])} ref={accordionRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
