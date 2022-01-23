import NavBar from "../navigation/NavBar";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className='mainHome'>
			<NavBar />
			<div className='header'>
				<h1>Check Out Our Designers</h1>
				<Link to='/stores'>
					<button>Go To Store</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
