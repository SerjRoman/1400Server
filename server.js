//підключає бібліотеку експрес
const express = require('express')
//створення експерес застосунку
const app = express()
//вказівник на застосунок або сервіс запущений на комп'ютері
const PORT = 8000
//адреса на наш комп'ютер
const HOST = 'localhost'
//оброблення get запиту, першим аргументом посилання, другим функція на цей запит
//ця функція відправляє відповідь
app.get('/', () => {
    console.log("ktoto zashel na stranicu")
})
//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () =>{
    console.log("server is running")
})