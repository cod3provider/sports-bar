const Button = ({children, type = 'button', className, onClick}) => {
	return (
		<button className={className} type={type} onClick={onClick}>{children}</button>
	)
}

export default Button;
