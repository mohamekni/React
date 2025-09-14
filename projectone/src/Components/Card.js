export default function Card(props) {
return <div>
        <img src={props.img} alt="logo"/>
        <h1>{props.title}</h1>
    </div>
}