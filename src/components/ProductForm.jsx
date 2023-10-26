const ProductForm = () => {
	return (
		<section>
			<form className='product_form'>
				<h2>Create product form</h2>
				<div className='form-input'>
					<label htmlFor='name'>Type name</label>
					<br />
					<input type='text' id='name' name='name' placeholder='Name' />
				</div>
				<div className='form-input'>
					<label htmlFor='price'>Set price</label>
					<br />
					<input
						type='number'
						id='price'
						name='price'
						placeholder='Price'
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
	)
}
export default ProductForm
