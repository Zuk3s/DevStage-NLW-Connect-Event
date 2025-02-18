import React, { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

const IconButton = ({ className, ...props }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        'p-2 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300',
        className
      )}
      {...props}
    />
  )
}

export default IconButton
