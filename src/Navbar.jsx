

export default function Navbar(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <h2 className="navbar-brand ml-auto">Navbar </h2>
                <ul className="navbar-nav mr-auto d-flex flex-row">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                </ul>

</nav>
}