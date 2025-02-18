import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {}

const Button = ({ className, ...props }: ButtonProps) => {
	return (
		<button
			className={twMerge(
				'flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300',
				className
			)}
			{...props}
		/>
	)
}

export default Button
