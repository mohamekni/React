import {useEffect, useState} from 'react';
import Name from './Components/Name'

export default function App() {

    const [data , setData] = useState([]);
    const datashow = data.map((items , index)=> <Name key={index} name={items} />)

    console.log(data);
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setData(data.data.memes.map(items => items.name)));
    }, [])
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    return (
        // <div>
        //     <form action="">
        //         <label htmlFor="1">First Name : </label>
        //         <input type="text" id="1" placeholder="First Name" 
        //         value={firstName} 
        //         onChange={(e)=>setFirstName(e.target.value)} required/>

        //         <label htmlFor="2"> Last Name : </label>
        //         <input type="text" id="2" placeholder="First Name" 
        //         value={lastName} 
        //         onChange={(e)=>setLastName(e.target.value)} required/>

        //         <label htmlFor="3"> Email : </label>
        //         <input type="text" id="3" placeholder="Email" 
        //         value={email}
        //         onChange={(e)=>setEmail(e.target.value)}
        //         required/>
        //         <button type='submit'>Submit</button>
        //     </form>
        // </div>
        <div>
            {datashow}
        </div>
    ) ;
}