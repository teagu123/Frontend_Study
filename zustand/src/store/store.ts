import create from 'zustand'

interface User {
	name: string
	setName: (name: string) => void
}

const UserStore = create<User>(set => ({
	name: '',
	setName: name => {
		set(() => ({ name: name }))
	},
}))

export default UserStore
