import React from 'react';

export default function App() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
        console.log(firstName)
    return (
        <div>
            <form action="">
                <label htmlFor="1">First Name : </label>
                <input type="text" id="1" placeholder="First Name" 
                value={firstName} 
                onChange={(e)=>setFirstName(e.target.value)} required/>

                <label htmlFor="2"> Last Name : </label>
                <input type="text" id="2" placeholder="First Name" 
                value={lastName} 
                onChange={(e)=>setLastName(e.target.value)} required/>

                <label htmlFor="3"> Email : </label>
                <input type="text" id="3" placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    ) ;
}