import logo from "../assets/shared/logo.png";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import burgerOpen from "../assets/shared/icon-hamburger.svg";
import burgerClose from "../assets/shared/icon-close.svg";

const NavBar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	const closeMenu = () => {
		setNavbarOpen(false);
	};

	return (
		<nav className='navvie'>
			<div class='nav-links'>
				<Link to='/' className='logo'>
					<img src={logo} alt='logo' className='logo' />
				</Link>
				<ul class='nav-list'>
					<li class='nav-a'>
						<Link className='nav-p' to='/' style={{ textDecoration: "none" }}>
							Home
						</Link>
					</li>
					<li class='nav-a'>
						<Link
							className='nav-p'
							to='/stores'
							style={{ textDecoration: "none" }}>
							Stores
						</Link>
					</li>
					<li class='nav-a'>
						<Link
							className='nav-p'
							to='/contact-us'
							style={{ textDecoration: "none" }}>
							Form
						</Link>
					</li>
				</ul>

				<div className='burger-menu'>
					<button onClick={handleToggle}>
						{navbarOpen ? (
							<img
								className='burg-img'
								src={burgerClose}
								alt='burger-menu is closed'
							/>
						) : (
							<img
								className='burg-img'
								src={burgerOpen}
								alt='burger menu is open'
							/>
						)}
					</button>
					<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
						<li class='nav-a'>
							<NavLink
								activeClassName='active-link'
								onClick={() => closeMenu()}
								className='nav-p'
								to='/'
								style={{ textDecoration: "none" }}
								exact>
								Home
							</NavLink>
						</li>

						<li class='nav-a'>
							<NavLink
								activeClassName='active-link'
								onClick={() => closeMenu()}
								className='nav-p'
								to='/stores'
								style={{ textDecoration: "none" }}
								exact>
								Stores
							</NavLink>
						</li>

						<li class='nav-a'>
							<NavLink
								activeClassName='active-link'
								onClick={() => closeMenu()}
								className='nav-p'
								to='/contact-us'
								style={{ textDecoration: "none" }}
								exact>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
