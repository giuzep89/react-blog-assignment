export default function Input({label, type, register, name, required}) {
    return (
        <label>{label}
            <input type={type}
                   {...register(name, {required})}
            />
        </label>
    )
}