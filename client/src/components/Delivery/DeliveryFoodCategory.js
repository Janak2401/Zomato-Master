import React from "react";

const DeliveryFoodCategory = (props) => {
	return (
		<>
		<div className="flex flex-col items-center bg-white shadow-md rounded-md lg:rounded-lg">
			<div className="w-24 h-20 rounded-md lg:rounded-lg md:w-48 md:h-48 lg:w-56 lg:h-56">
				<img 
				 src={props.src}
				 alt="food"
				 className="w-full h-full rounded-t-md lg:rounded-t-lg"
				/>
			</div>

			<div>
				<h3 className="mb-1 text-base font-medium md:text-lg lg:text-xl">{props.dish}</h3>
			</div>
		</div>
		</>
	);
};

export default DeliveryFoodCategory;
