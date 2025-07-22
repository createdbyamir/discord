import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import { Menu } from 'lucide-react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);


    function toggleMenu() {
        setMenuOpen(prev => !prev);
        console.log('Menu is now', !menuOpen ? 'open' : 'closed');
  }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="Nexa logo" width="120" />
                </div>
                <div className="toggle" onClick={toggleMenu}>
                    <Menu />
                </div>

                {menuOpen && (
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#why">Why choose us</a></li>
                            <li><a href="#dashboard">Dashboard</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                )}

                <div className="buttons">
                    <button>Connect with us</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
