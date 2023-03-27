const age = 25

if (age > 18) {
	console.log('is adult')
} else if (age >= 12) {
	console.log('is teeneger')
} else {
	console.log('Is child')
}


const sumPositiveNumbers = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'One of the arguments is not a number'
	}

	if (a <= 0 || b <= 0) {
		return 'Numbers are not positive'
	}

	return a + b
}

const myArray = ['first', 'second', 'third']

for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i])
}

const myObject = {
	x: 10,
	y: true,
	z: 'abc'
}

/* for (const key in myObject) {
	console.log(key, myObject[key])
} */

Object.keys(myObject).forEach(key => {
	console.log(key, myObject[key])
})

Object.values(myObject).forEach(value => {
	console.log(value)
})