export default function signUp(){

    function Submit(event){
        event.preventDefault();
    }

    return (
        <div className="signup">
            <div className="register">
            <form onSubmit={Submit}>
                <label htmlFor="1">UserName : </label>
                <input type="text" placeholder="username" id="1" required/>
                <label htmlFor="2">Email : </label>
                <input type="email" placeholder="Email" id="2" required/>
                <label htmlFor="3">Password : </label>
                <input type="Password" placeholder="Password" id="3" required/>
                <label htmlFor="4">Repeat Password : </label>
                <input type="Password" placeholder="Password" id="4" required/>
                <div style={{textAlign:"center"}}>
                    <button type="submit">Register</button>
                </div>
            </form>
            </div>
        </div>
    )
}