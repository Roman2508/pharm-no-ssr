import React from "react"
import cn from "classnames"

import styles from "./FullScreenFrame.module.scss"

interface IFullScreenFrameProps {
  isOpenFullScreen: boolean
  children: string | JSX.Element | JSX.Element[]
  setOpenFullScreen: React.Dispatch<React.SetStateAction<boolean>>
}

const FullScreenFrame: React.FC<
  React.PropsWithChildren<IFullScreenFrameProps>
> = ({ children, isOpenFullScreen, setOpenFullScreen }) => {
  const pauseVideo = () => {
    var iframe = document.querySelector("iframe")
    if (iframe) {
      var iframeSrc = iframe.src
      iframe.src = iframeSrc
    }
  }

  const handleClose = () => {
    pauseVideo()
    setOpenFullScreen(false)
  }

  return (
    <div
      className={cn(styles["full-screen-frame"], {
        [styles["full-screen-frame__layout-close"]]: !isOpenFullScreen,
      })}
    >
      <div className={styles["full-screen-frame__inner"]}>
        <div
          className={cn(styles["full-screen-frame__content"], {
            [styles["full-screen-frame--open"]]: isOpenFullScreen,
            [styles["full-screen-frame--close"]]: !isOpenFullScreen,
          })}
        >
          {children}

          <svg
            className={styles["full-screen-frame__close-icon"]}
            onClick={handleClose}
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#ffffff"
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FullScreenFrame
