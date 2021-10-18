import React from "react";

// Components
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
	return (
		<>
			<h1 className="text-xl font-semibold m-4 md:text-2xl md:m-6 lg:mx-4 lg:mt-28 lg:text-3xl">Eat what makes you happy!</h1>
			<div className="flex flex-wrap justify-around gap-6 md:gap-8 mx-4 lg:justify-start lg:flex-nowrap lg:overflow-x-auto lg:pb-4 lg:gap-10">
				<DeliveryFoodCategory dish="Biryani" 
					src="https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png?fit=around|120:120&crop=120:120;*,*" />
				<DeliveryFoodCategory dish="Chicken" 
					src="https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png?fit=around|120:120&crop=120:120;*,*" />
				<DeliveryFoodCategory dish="Pizza" 
					src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png?fit=around|120:120&crop=120:120;*,*" />
				<DeliveryFoodCategory dish="Paneer" 
					src="https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png?fit=around|120:120&crop=120:120;*,*" />
				<DeliveryFoodCategory dish="Chaat" 
					src="https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png?fit=around|120:120&crop=120:120;*,*" />
				<DeliveryFoodCategory dish="Burger" 
					src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg" />
			</div>
		</>
	);
};

export default DeliveryCarousal;
