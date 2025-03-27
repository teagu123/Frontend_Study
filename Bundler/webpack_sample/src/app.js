import { Test1 } from './test_1.js'
import { Test2 } from './test_2.js'
import { Test3 } from './test_3.js'
import './app.css'

window.addEventListener('DOMContentLoaded', () => {
	const el = document.querySelector('#app')
	el.innerHTML = `
        <h1>Test1= ${Test1()}</h1>
        <h1>Test2= ${Test2()}</h1>
        <h1>Test3= ${Test3()}</h1>
    `
})
