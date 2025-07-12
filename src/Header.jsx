import logo from './assets/logo.png';

function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Nexa logo" width="120" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="buttons">
                <button>Connect with us</button>
            </div>
        </header>
    );
}

export default Header