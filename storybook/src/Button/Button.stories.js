import Button from './Button'
import React from 'react'

//Title은 스토리북 폴더를 의미
//component는 불러와서 쓰는 거
export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: {
			options: ['default-white', 'default-reverse', 'default'],
			control: { type: 'radio' },
		},
		shape: {
			options: ['default'],
			control: { type: 'radio' },
		},
		size: {
			options: ['normal', 'big', 'default'],
			control: { type: 'radio' },
		},
		fontSize: {
			options: ['default'],
			control: { type: 'radio' },
		},
	},
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	variant: 'default',
	shape: 'default',
	size: 'default',
	fontSize: 'default',
}
