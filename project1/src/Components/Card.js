export default function Card(props) {
return <div>
        <div style={{
                    backgroundImage:`url(${props.img})`, 
                    width:"300px", 
                    height:"300px", 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    borderRadius:'10px' 
                    }}>
        </div>

        <div style={{display:"flex",alignItems:"center", justifyContent:"space-between", marginBottom:"0"}}>
            <h1 style={{}}>{props.title}</h1>
            <h3 style={{fontWeight:"normal"}}><i className="fa-solid fa-star" style={{color:"gold"}}></i>{props.review}</h3>
        </div>
        <h3>{props.price}$ <span style={{fontWeight:"normal"}}>night</span></h3>
    </div>
}