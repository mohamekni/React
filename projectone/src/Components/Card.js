export default function Card(props) {
return <div style={{width:"250px"}}>
        <img src={props.img} style={{width:"250px", height:"300px"}} alt="logo"/>
        <div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
            <h1 style={{}}>{props.title}</h1>
            <h3>{props.review}</h3>
        </div>
        <h3 style={{marginTop:"0"}}>{props.price}$ night</h3>
    </div>
}