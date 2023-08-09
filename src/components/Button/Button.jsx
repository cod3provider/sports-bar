const Button = ({children, type = 'button', className}) => {
	return (
		<button className={className} type={type}>{children}</button>
	)
}

export default Button;
