let store = {
    todoList: [
        { id: 1, text: 'first', done: true },
        { id: 2, text: 'second', done: false },
    ]
}

console.log('Изначальное состояние')
console.log(JSON.stringify(store.todoList))


console.log('Добавление')
store.todoList.push({ id: 3, text: 'third', done: false })
store.todoList.push({ id: 4, text: 'fourth', done: false })

console.log(JSON.stringify(store.todoList))

console.log('Изменение статуса id = 2')
let id_var = 2
let findObj = store.todoList.find(x => x.id === id_var)

findObj.done = true
console.log(JSON.stringify(store.todoList))

console.log('Удаление id = 3')
id_var = 3
let idx = -1
for (idx = 0; store.todoList[idx] && store.todoList[idx].id !== id_var; idx++);
store.todoList.slice(idx, idx)