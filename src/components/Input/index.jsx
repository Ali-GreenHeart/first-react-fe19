
const Input = ({ type = "text", placeholder = '', onChange, value, onEnter }) => {
    return (
        <>
            <input
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        onEnter()
                    }
                }}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    )
}
export default Input
