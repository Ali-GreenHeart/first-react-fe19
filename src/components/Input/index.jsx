
const Input = ({ type = "text", placeholder = '', onChange, value }) => {
    return (
        <>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    )
}
export default Input
