import React from 'react'
import Input from './Input'

//Title은 스토리북 폴더를 의미
//component는 불러와서 쓰는 거
export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		status: {
			options: ['success', 'error', 'default'],
			control: { type: 'radio' },
		},
	},
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
	status: 'default',
}
