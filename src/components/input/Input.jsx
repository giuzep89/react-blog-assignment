export default function Input({label, type, register, name, required}) {
    return (
        <>
        <label htmlFor={name}>{label}</label>
            <input type={type}
                   {...register(name, {required})}
            />
        </>
    )
}