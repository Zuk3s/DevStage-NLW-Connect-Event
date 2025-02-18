import React, { type ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

const InputRoot = ({ error = false, ...props }: InputRootProps) => {
  return (
    <div
      data-error={error}
      className="group flex items-center bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 gap-2 focus-within:outline-2 data-[error=true]:outline-danger data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

const InputIcon = (props: InputIconProps) => {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-not-has-placeholder-shown:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

const InputField = (props: InputFieldProps) => {
  return (
    <input
      className="flex-grow outline-0 placeholder-gray-400 not-placeholder-shown:text-gray-100"
      {...props}
    />
  )
}

export { InputRoot, InputField, InputIcon }
