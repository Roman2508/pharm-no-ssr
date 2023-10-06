import React from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

import Input from '../ui/Input/Input'
import styles from './Form.module.scss'
import Button from '../ui/Button/Button'
import { validEmail } from '@/utils/validMali'
import { Textarea } from '../ui/Textarea/Textarea'

interface IFormProps {
  isAnonim?: boolean
}

export interface IFormFields {
  email: string
  userName: string
  subject: string
  message: string
}

const Form: React.FC<IFormProps> = ({ isAnonim = false }) => {
  const form = React.useRef(null)

  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const {
    register,
    formState: { errors, isDirty, isValid },
    reset,
    getValues,
  } = useForm<IFormFields>()

  const sendEmail = (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    emailjs
      .sendForm('service_hsn7k71', 'template_6arn6nf', form.current || '', 'cq9KjIAiqLA7Ps4Ph')
      .then(
        (result) => {
          console.log(result.text)
          alert('Повідомлення відправлено!')
        },
        (error) => {
          console.log(error.text)
          alert('Помилка при відправці повідомлення :(')
        }
      )
      .finally(() => {
        setIsSubmitting(false)
        reset()
      })
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      {isAnonim && (
        <>
          <Input
            {...register('userName', {
              required: "Ім'я обов'язкове",
            })}
            width="100%"
            label="Ваше ім`я"
            value={getValues().userName}
            error={errors.userName}
          />

          <Input
            {...register('email', {
              required: "E-mail обов'язковий",
              pattern: {
                value: validEmail,
                message: 'Не вірний формат пошти',
              },
            })}
            width="100%"
            label="Ваш E-mail"
            value={getValues().email}
            error={errors.email}
          />

          <div className={styles.selectWrapper}>
            <label htmlFor="subject" className={styles.selectLabel}>
              Тема питання
            </label>
            <select
              {...register('subject')}
              name="subject"
              id="subject"
              className={styles.select}
              value={getValues().subject}
            >
              <option>Загальне питання</option>
              <option>Питання до адміністрації</option>
              <option>Питання про вступ</option>
            </select>
          </div>
        </>
      )}

      {!isAnonim && <p className={styles['anon-desc']}>Ви можете відправити будь-яке повідомлення анонімно.</p>}

      <Textarea
        {...register('message', {
          required: "Текст повідомлення обов'язковий",
        })}
        width="100%"
        label="Текст повідомлення"
        value={getValues().message}
        error={errors.message}
      />

      <Button disabled={isSubmitting || !isDirty || !isValid}>Відправити повідомлення</Button>
    </form>
  )
}

export default Form
