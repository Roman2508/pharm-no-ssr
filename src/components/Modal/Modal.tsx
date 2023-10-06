import React from "react"
import cn from "classnames"

import styles from "./Modal.module.scss"

interface IModalProps {
  isShow: boolean
  modalTitle?: string
  modalBody?: string
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
  children?: JSX.Element | JSX.Element[] | string
  classNames?: string
  ref: any
}

const Modal = React.forwardRef<React.FC, React.PropsWithChildren<IModalProps>>(
  (
    { children, isShow, setIsShow, modalTitle, modalBody, classNames = "" },
    ref
  ) => {
    const body = modalBody?.replaceAll(
      "/uploads",
      `${process.env.API_URL}/uploads`
    )

    return (
      <>
        <div className={cn(styles.layout, { [styles.layoutClose]: !isShow })}>
          <div className={styles.modalWrapper}>
            <div
              className={cn(styles.modal, classNames, styles.light, {
                [styles.openModal]: isShow,
                [styles.closeModal]: !isShow,
              })}
              //@ts-ignore
              ref={ref}
            >
              <div className={styles.modalTop}>
                <h5>{modalTitle}</h5>

                <svg
                  className={styles.closeIcon}
                  onClick={() => setIsShow(false)}
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#000000"
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                  />
                </svg>
              </div>
              {children}
              <div
                className={styles["body"]}
                dangerouslySetInnerHTML={{ __html: body || "" }}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
)

export default Modal
