const userProfile = {
	name: 'Stas',
	commentQty: 24,
	hasSignedAgreement: false
}

const userInfo = ({name, commentQty}) => {
	if (!commentQty) {
		return `User ${name} has no comments`
	} 
	return `User ${name} has ${commentQty} comments`
}

userInfo(userProfile)

/* const { name, commentQty } = userProfile
const {hasSignedAgreement} = userProfile

const fruits = ['Apple', 'Banana']

const [fruitsOne, fruitsTwo] = fruits */