import React from "react";

const BestFoodCard = (props) => {
	return (
		<>
		<div className="flex flex-col bg-white shadow-lg rounded-lg w-full h-72 mb-4 p-1 border-2 border-transparent md:w-80 hover:shadow-xl cursor-pointer hover:border-gray-500">
			<div className="w-full rounded-lg h-3/4">
				<img 
				 src={props.src}
				 alt="pizza"
				 className="w-full h-full rounded-t-lg object-fill"
				/>
			</div>

			<div className="h-1/4">
				<h3 className="text-2xl font-medium m-2">{props.name}</h3>
			</div>
		</div>
		</>
	);
};

export default BestFoodCard;
