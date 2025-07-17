import logo from './assets/logo.png';

function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Nexa logo" width="120" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#why">Why choose us</a></li>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="buttons">
                <button>Connect with us</button>
            </div>
        </header>
    );
}

export default Header