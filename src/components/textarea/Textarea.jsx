export default function Textarea({label, register, name, required, minLength, maxLength }) {
    return (
        <>
        <label htmlFor={name}>{label}</label>
        <textarea
                  {...register(name, {
                      required: {required},
                      minLength: {
                          value: minLength,
                          message: `De blogpost moet minimaal ${minLength} karakters zijn`
                      },
                      maxLength: {
                          value: maxLength,
                          message: `De blogpost mag niet langer dan ${maxLength} karakters zijn`
                      }
                  })}></textarea>
        </>
    )
}