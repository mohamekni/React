import { useState } from "react";

export default function SignUp(){

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPass] = useState("");
    const [passwordR , setPassR] = useState("");
    const [error , setError] = useState(false);

    console.log(name)

    function Submit(event){
        event.preventDefault();
        setError(true);
    }

    return (
        <div className="signup">
            <div className="register">
            <form onSubmit={Submit}>
                <label htmlFor="1">UserName : </label>
                <input type="text" placeholder="username" id="1" value={name} onChange={(e)=> setName(e.target.value)}/>

                <label htmlFor="2">Email : </label>
                <input type="email" placeholder="Email" id="2" value={email} onChange={(e)=> setEmail(e.target.value)} required/>

                <label htmlFor="3">Password : </label>
                <input type="Password" placeholder="Password" id="3" value={password} onChange={(e)=> setPass(e.target.value)} />

                {password.length < 8 && error && <p style={{color:"red"}}>Password must be 8 characters long</p> }

                <label htmlFor="4">Repeat Password : </label>
                <input type="Password" placeholder="Password" id="4" value={passwordR} onChange={(e)=> setPassR(e.target.value)} />
                {passwordR !== password && error && <p style={{color:"red"}}>Passwords does not match</p> }
                <div style={{textAlign:"center"}}>
                    <button type="submit">Register</button>
                </div>
            </form>
            </div>
        </div>
    )
}