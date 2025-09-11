function Header() {
    return (
        <div className="header">
            <ul>
                <div>
                <li className='active'>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Docs</li>
                </div>
                <img src={require('./TFT-copie.jpg')} 
                alt="logo" 
                style={{width : "100px" , marginRight : '200px'}}
                 />
            </ul>
        </div>
    );
}

export default Header;