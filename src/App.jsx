import { useReducer, useState } from 'react'
import { ProductList, FormInput } from './components/'
import { productReducer, initialState } from './features/ProductReducer'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	const [product, dispatch] = useReducer(productReducer, initialState)
	const [products, setProducts] = useState([])

	const handleChange = (e) => {
		dispatch({
			type: 'CHANGE_INPUT',
			payload: { name: e.target.name, value: e.target.value },
		})
	}

	const handleImageChange = (e) => {
		dispatch({
			type: 'CHANGE_INPUT',
			payload: {
				name: e.target.name,
				value: URL.createObjectURL(e.target.files[0]),
			},
		})
	}

	const removeProduct = (e) => {}

	const submitProduct = (e) => {
		e.preventDefault()
		if (!product.name || !product.price || !product.image) {
			toast.error('Please fill out all fields')
			return
		}
		setProducts([
			...products,
			{
				id: nanoid(),
				name: product.name,
				price: product.price,
				image: product.image,
			},
		])
		dispatch({
			type: 'CLEAR_VALUES',
		})
	}

	return (
		<main className=''>
			<section className='product_form-section'>
				<form className='product_form' onSubmit={submitProduct}>
					<h2>Add new product</h2>
					<FormInput
						type='text'
						name='name'
						handleChange={handleChange}
						labelText='Type a name'
						value={product.name}
					/>
					<FormInput
						type='number'
						name='price'
						handleChange={handleChange}
						labelText='Set price'
						value={product.price}
					/>
					<FormInput
						type='file'
						name='image'
						handleChange={handleImageChange}
						labelText='Choose file'
					/>

					<button type='submit'>Create product</button>
				</form>
			</section>

			<section className='products-list'>
				<h4>Products Total: {products.length}</h4>
				<ul>
					{products.map((product) => {
						return (
							<>
								<li key={product.id}>
									<picture>
										<img src={product.image} alt='product image' />
									</picture>
									<div>
										<span>{product.name}</span>
										<span>{product.price}</span>
									</div>
									<button type='button' onClick={removeProduct}>
										X
									</button>
								</li>
							</>
						)
					})}
				</ul>
				<ProductList />
			</section>
			<ToastContainer position='top-center' autoClose='2000' />
		</main>
	)
}

export default App

