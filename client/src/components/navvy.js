import './navvy.scss'

function Navvy() {
    return (
        <nav className="menu">
            <ol>
                <li className="menu-item"><a href="/">Home</a></li>
                <li className="menu-item"><a href="#0">Info</a></li>
            </ol>
        </nav>
    );
}

export default Navvy;