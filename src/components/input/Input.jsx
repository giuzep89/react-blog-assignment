export default function Input({label, type, register, name, required}) {
    return (
        <>
        <label htmlFor={name}>{label}</label>
            <input id={name} type={type}
                   {...register(name, {required})}
            />
        </>
    )
}