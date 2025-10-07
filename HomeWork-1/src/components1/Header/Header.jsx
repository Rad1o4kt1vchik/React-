import './Header.css'
function Header () {
    return (
        <div>
            <nav>
                <p className='Radio'>Radmir Site</p>
                <ul className={"menu-container"}>
                    <li>Home</li>
                    <li>Hello</li>
                    <li>Main</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header