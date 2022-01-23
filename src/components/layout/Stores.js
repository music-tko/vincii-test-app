import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import NavBar from "../navigation/NavBar";
import store from "./db.json";
import LightBox from "./LightBox";

const Stores = (data) => {
	return (
		<div className='store-bg'>
			<NavBar />
			<div className='store-sect'>
				<ul className='all-stores'>
					<CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={125}
						totalSlides={3}>
						<Slider>
							{store.map((stores, index) => (
								<Slide index={index}>
									<li className='objects' key={index}>
										<div className='content-store'>
											<div className='desti-store'>
												<LightBox
													src={stores.img}
													alt={stores.title}
													className='store-pic'>
													<img
														src={stores.img}
														alt={stores.title}
														className='store-pic'
													/>
												</LightBox>
												<div className='content-slide'></div>
												<div className='all'>
													<h1 className='store-heading'>
														{stores.title.toUpperCase()}
													</h1>
													<p class='description'>{stores.description}</p>
												</div>
												<div className='store-buttons'>
													<Dot className='store-btn' slide={0} />

													<Dot className='store-btn' slide={1} />

													<Dot className='store-btn' slide={2} />
												</div>
											</div>
										</div>
									</li>
								</Slide>
							))}
						</Slider>
					</CarouselProvider>
				</ul>
			</div>
		</div>
	);
};

export default Stores;
