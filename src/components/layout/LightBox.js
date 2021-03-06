import { useState } from "react";

const LightBox = ({ children, src, alt, Wrapper = "div", zIndex = 100 }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Wrapper onClick={toggleIsOpen}>
			{children}
			{isOpen ? (
				<div
					onClick={toggleIsOpen}
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						height: "100vh",
						width: "100vw",
						cursor: "pointer",
						backgroundColor: "rgba(0,0,0,0.7)",
						zIndex,
					}}>
					<img
						src={src}
						alt={alt}
						className='lightbox'
						style={{
							position: "relative",
							top: "0",
							left: "30%",
							height: "25em",
							width: "25em",
							cursor: "pointer",
						}}
					/>
				</div>
			) : null}
		</Wrapper>
	);
};

export default LightBox;
