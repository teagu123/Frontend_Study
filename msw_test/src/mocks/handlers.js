import { http, HttpResponse } from 'msw'

const todoList = [
	{ id: 1, title: '테스트 1번' },
	{ id: 2, title: '테스트 2번' },
]

export const handlers = [
	http.get('/todo', () => {
		return HttpResponse.json(todoList, {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}),
	http.post('/todo', async ({ request }) => {
		const requestData = await request.json()
		const title = requestData?.toString()

		const newTodo = { id: todoList.length + 1, title }
		todoList.push(newTodo)

		return HttpResponse.json(todoList, { status: 200 })
	}),
]
