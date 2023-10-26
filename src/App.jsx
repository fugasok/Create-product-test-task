import { useState } from 'react'
import { ProductForm, ProductList } from './components/'

function App() {
	const [count, setCount] = useState(0)

	return (
		<main>
			<ProductForm />
			<ProductList />
		</main>
	)
}

export default App

