import React from 'react';

export default function App() {

    const [x,setX] = React.useState(true);
   function Toggle(){
    setX((prev)=>!prev)
   }
    return (
        <div className="App">
            <div style={{textAlign:"center"}} 
                onClick={Toggle}>
                    <i style={{color:x ? "red":"gold"}} className="fa-solid fa-star"></i>
            </div>
        </div>
    ) ;
}