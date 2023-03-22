const newPost = (post, addedAt = Date()) => ({ // addedAt -- будет динамически изменятся в зависимости от даты вызова
	...post,
	addedAt // использована сокращенная форма записи свойства объекта
}) // круглые скобки для неявного возврата объекта из функции

const firstPost = {
	id: 1,
	author: 'Bogdan'
}

const secondPost = {
	id: 2,
	author: 'Stas'
}

console.table(newPost (secondPost));

