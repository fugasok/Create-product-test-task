import { useReducer, useState } from 'react'
import { ProductList } from './components/'
import { INITIAL_STATE, ProductFormReducer } from './features/ProductReducer'

function App() {
	const [state, dispatch] = useReducer(ProductFormReducer, INITIAL_STATE)

	const handleChange = (e) => {
		dispatch({
			type: 'CHANGE_INPUT',
			payload: { name: e.target.name, value: e.target.value },
		})
	}

	console.log(state)

	return (
		<main className=''>
			<section className='product_form-section'>
				<form className='product_form'>
					<h2>Create product form</h2>
					<div className='form-input'>
						<label htmlFor='name'>Type name</label>
						<br />
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Name'
							onChange={handleChange}
						/>
					</div>
					<div className='form-input'>
						<label htmlFor='price'>Set price</label>
						<br />
						<input
							type='number'
							id='price'
							name='price'
							placeholder='Price'
							onChange={handleChange}
						/>
					</div>
					<div className='form-input'>
						<label htmlFor='image'>Choose image</label>
						<br />
						<input type='file' id='image' name='image' />
					</div>

					<button type='submit'>Create product</button>
				</form>
			</section>

			<ProductList />
		</main>
	)
}

export default App

