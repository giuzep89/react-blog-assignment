import "./Button.css"

export default function Button ({className, type, text}){
    return (
        <button className={className} type={type}>{text}</button>
    )
}