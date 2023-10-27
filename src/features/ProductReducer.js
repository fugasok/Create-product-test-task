export const initialState = {
	name: '',
	price: '',
	image: '',
}

export const productReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return { ...state, [action.payload.name]: action.payload.value }
		case 'CLEAR_VALUES':
			return { ...initialState }
		default:
			return state
	}
}
