import React, { forwardRef } from 'react'
import cn from 'classnames'

import styles from './Textarea.module.scss'
import { FieldError } from 'react-hook-form'

interface IInputProps {
  // isError?: boolean
  // errorMessage?: string
  name?: string
  label?: string
  value?: string
  width?: string
  // setValue: React.Dispatch<React.SetStateAction<string>> | ((val: string) => void)
  error?: FieldError
}

const Textarea = forwardRef<HTMLTextAreaElement, IInputProps>(
  (
    {
      error,
      name = '',
      // setValue,
      label = '',
      value = '',
      //  isError = false,
      width = '100%',
      //  errorMessage = '',
      ...rest
    },
    ref
  ) => {
    const [isFocus, setIsFocus] = React.useState(false)
    const [isFocusLabel, setIsFocusLabel] = React.useState(false)

    const onFocusHandler = () => {
      setIsFocus(true)
      setIsFocusLabel(true)
    }

    const onBlurHandler = () => {
      if (!value) {
        setIsFocus(false)
      }
      setIsFocusLabel(false)
    }

    return (
      <div className={cn(styles.wrapper, styles.errorWrapper)} style={{ width: width }}>
        <label
          className={cn(styles.label, {
            [styles.errorLabel]: error?.message,
            [styles.focusLabel]: true,
            [styles.outlinedLabel]: true,
            [styles.focusLabelLight]: true,
            [styles.focusOutlinedLabel]: true,
          })}
        >
          {label}
        </label>

        <div
          className={cn(styles.inputWrapper, {
            [styles.focusInput]: true,
            [styles.errorBottomLine]: error?.message,
          })}
          style={{ width: width }}
        >
          {/*  */}
          <textarea
            ref={ref}
            name={name}
            // value={value}
            onBlur={onBlurHandler}
            style={{ width: width }}
            onFocus={onFocusHandler}
            className={cn(styles.input, {
              [styles.outlinedInput]: true,
              [styles.lightModeInput]: true,
              [styles.errorInput]: error?.message,
            })}
            // onChange={(e) => setValue(e.target.value)}
            {...rest}
          />

          {error?.message && (
            <p className={cn(styles.errorMessage)} style={{ width: width }}>
              {error?.message}
            </p>
          )}
        </div>
      </div>
    )
  }
)

// const Textarea: React.FC<IInputProps> = ({
//   setValue,
//   label = '',
//   value = '',
//   isError = false,
//   width = '100%',
//   errorMessage = '',
// }) => {
//   const [isFocus, setIsFocus] = React.useState(false)
//   const [isFocusLabel, setIsFocusLabel] = React.useState(false)

//   const onFocusHandler = () => {
//     setIsFocus(true)
//     setIsFocusLabel(true)
//   }

//   const onBlurHandler = () => {
//     if (!value) {
//       setIsFocus(false)
//     }
//     setIsFocusLabel(false)
//   }

//   return (
//     <div className={styles.wrapper} style={{ width: width }}>
//       <label
//         className={cn(styles.label, {
//           [styles.errorLabel]: isError,
//           [styles.focusLabel]: isFocusLabel,
//           [styles.outlinedLabel]: true,
//           [styles.focusLabelLight]: isFocus,
//           [styles.focusOutlinedLabel]: isFocus,
//         })}
//       >
//         {label}
//       </label>

//       <div
//         className={cn(styles.inputWrapper, {
//           [styles.focusInput]: isFocusLabel,
//           [styles.errorBottomLine]: isError,
//         })}
//         style={{ width: width }}
//       >
//         {/*  */}
//         <textarea
//           value={value}
//           onBlur={onBlurHandler}
//           style={{ width: width }}
//           onFocus={onFocusHandler}
//           className={cn(styles.input, {
//             [styles.outlinedInput]: true,
//             [styles.lightModeInput]: true,
//             [styles.errorInput]: isError,
//           })}
//           onChange={(e) => setValue(e.target.value)}
//         />

//         {errorMessage && (
//           <p className={cn(styles.errorMessage)} style={{ width: width }}>
//             {errorMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   )
// }

export { Textarea }
