import React, { forwardRef } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'

interface IInputProps {
  variant?: 'outlined' | 'standart'
  isError?: boolean
  errorMessage?: string
  label?: string
  value?: string
  width?: string
  error?: FieldError
  name?: string
  inputType?: 'text' | 'email'
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      // setValue,
      error,
      label = '',
      value = '',
      isError = false,
      width = '100%',
      errorMessage = '',
      variant = 'outlined',
      inputType = 'text',
      name = '',
      ...rest
    },
    ref
  ) => {
    const [isFocus, setIsFocus] = React.useState(true)
    const [isFocusLabel, setIsFocusLabel] = React.useState(true)

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
      <div className={cn(styles.wrapper, { [styles.errorWrapper]: error?.message })} style={{ width: width }}>
        <label
          className={cn(styles.label, {
            [styles.errorLabel]: error?.message,
            [styles.focusLabel]: true,
            [styles.standartLabel]: variant === 'standart',
            [styles.outlinedLabel]: variant === 'outlined',
            [styles.focusLabelLight]: true,
            [styles.focusStandartLabel]: true && variant === 'standart',
            [styles.focusOutlinedLabel]: true && variant === 'outlined',
          })}
        >
          {label}
        </label>

        <div
          className={cn(styles.inputWrapper, {
            [styles.bottomLine]: true && variant === 'standart',
            [styles.focusInput]: true,
            [styles.errorBottomLine]: error?.message,
          })}
          style={{ width: width }}
        >
          {/*  */}
          <input
            ref={ref}
            // value={value}
            type={inputType}
            name={name}
            onBlur={onBlurHandler}
            style={{ width: width }}
            onFocus={onFocusHandler}
            className={cn(styles.input, {
              [styles.outlinedInput]: variant === 'outlined',
              [styles.standartInput]: variant === 'standart',
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

export default Input

/* 
<div className={cn(styles.wrapper, { [styles.errorWrapper]: error?.message })} style={{ width: width }}>
        <label
          className={cn(styles.label, {
            [styles.errorLabel]: error?.message,
            [styles.focusLabel]: isFocusLabel,
            [styles.standartLabel]: variant === 'standart',
            [styles.outlinedLabel]: variant === 'outlined',
            [styles.focusLabelLight]: isFocus,
            [styles.focusStandartLabel]: isFocus && variant === 'standart',
            [styles.focusOutlinedLabel]: isFocus && variant === 'outlined',
          })}
        >
          {label}
        </label>

        <div
          className={cn(styles.inputWrapper, {
            [styles.bottomLine]: isFocus && variant === 'standart',
            [styles.focusInput]: isFocusLabel,
            [styles.errorBottomLine]: error?.message,
          })}
          style={{ width: width }}
        >
          <input
            ref={ref}
            // value={value}
            type={inputType}
            name={name}
            onBlur={onBlurHandler}
            style={{ width: width }}
            onFocus={onFocusHandler}
            className={cn(styles.input, {
              [styles.outlinedInput]: variant === 'outlined',
              [styles.standartInput]: variant === 'standart',
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
*/
