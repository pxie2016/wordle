import './Letter.css'

export default function Letter (props){
    let letterClass = "letter " + `${props.color}`
    return (
        <div className={letterClass}>
            {props.value}
        </div>
    )
}