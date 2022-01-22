import NavBar from "../navigation/NavBar";

const Form = () => {
	return (
		<div>
			<NavBar />
			<form action='post' id='contact'>
				<div className='profile-submit'>
					<label htmlFor='Name' id='name'>
						<p>Name:</p>
					</label>
					<input type='name' name='name' id='contact-name' minLength={6} />
				</div>
				<button id='submit'> Submit </button>
			</form>
		</div>
	);
};

export default Form;
