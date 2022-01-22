import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import NavBar from "../navigation/NavBar";

const Stores = (data) => {
	const [Store, setStore] = useState(null);

	useEffect(() => {
		setData();
		console.log(data);
	});

	console.log(data);
	const setData = async () => data.then((res) => setStore(res.stores));

	return (
		<div className='store-bg'>
			<NavBar />
			{Store ? (
				<div className='store-sect'>
					<ul className='all-destination'>
						<CarouselProvider
							naturalSlideWidth={100}
							naturalSlideHeight={125}
							totalSlides={3}>
							<Slider>
								{Store.map((stores, index) => (
									<Slide index={index}>
										<li className='objects' key={index}>
											<div className='content-store'>
												<div className='desti-store'>
													<img
														src={stores.img}
														alt={stores.title}
														className='store-pic'
													/>

													<div className='content-slide'></div>
													<div className='all'>
														<h1 className='store-heading'>
															{stores.title.toUpperCase()}
														</h1>
														<p class='description'>{stores.description}</p>
													</div>
													<div className='store-buttons'>
														<Dot
															className='store-btn'
															slide={0}
															children={stores.title}
														/>

														<Dot
															className='store-btn'
															slide={1}
															children={stores.title}
														/>

														<Dot
															className='store-btn'
															slide={2}
															children={stores.title}
														/>

														{/* <Dot
															className='desti-btn'
															slide={3}
															children={item.title}
														/> */}
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
			) : (
				<span className='loading'>
					<p>loading...</p>
				</span>
			)}
		</div>
	);
};

export default Stores;
