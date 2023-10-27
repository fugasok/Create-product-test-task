const FormInput = ({ type, name, handleChange, labelText, value }) => {
	return (
		<div className='form-row'>
			<div className='form-input'>
				<label htmlFor={name} className='form-label'>
					{labelText || name}
				</label>
				<input
					id={name}
					type={type}
					name={name}
					placeholder={name}
					onChange={handleChange}
					className='form-input'
					value={value}
				/>
			</div>
		</div>
	)
}
export default FormInput
