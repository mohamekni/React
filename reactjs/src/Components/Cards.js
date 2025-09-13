export default function Card (props) {
    return (
        <div>
            <h1>{props.title} </h1>
            <h3>{props.desc}</h3>
        </div>
    )
}