import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/NavBarStyle.css"

const NavbarMenu = () => {
    const setActiveClass = ({ isActive }) => {
        const aux = "text-decoration-none";
        return isActive ? `text-warning ${aux}` : `text-light ${aux}`;
    };

    return (
        <>
            <Navbar className="mb-0" bg="dark" data-bs-theme="light">
                <Container>
                    <div>
                        <img className="PokeIcono" src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png"
                            alt="pokeball" />
                    </div>
                    <Nav className="NavOpt">
                        <h3 className=""><NavLink className={setActiveClass} to="/">Home</NavLink></h3>
                        <h3 className=""><NavLink className={setActiveClass} to="/pokemones"> {" "}Pokémon{" "}</NavLink></h3>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavbarMenu
