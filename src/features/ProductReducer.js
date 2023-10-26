export const INITIAL_STATE = {
	name: '',
	price: '',
	image: '',
}

export const ProductFormReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return { ...state, [action.payload.name]: action.payload.value }
		case 'CHANGE_INPUT_IMAGE':
			return {}
		case 'SUBMIT_PRODUCT':
			return {}
		default:
			return state
	}
}
