import React from "react";
import BestFoodCard from "./bestFoodCard";

const BestFood = () => {
	return (
		<>
		<div className="flex flex-col gap-4 items-start mx-8 my-4 lg:my-10">
			<h1 className="text-xl font-semibold lg:text-3xl">Best Food in Nagpur</h1>

			<div className="flex flex-wrap gap-4 md:justify-between lg:gap-8">
				<BestFoodCard name="New Thali King" src="https://b.zmtcdn.com/data/pictures/9/18722559/1b0714760a63bcabc288a001b7574131_o2_featured_v2.jpg?output-format=webp" />
				<BestFoodCard name="Jubilee Bakery" src="https://b.zmtcdn.com/data/pictures/1/3301941/d0ec4b40f0379b0dcaacc45921891086_o2_featured_v2.jpg?output-format=webp" />
				<BestFoodCard name="Shabana's Kitchen" src="https://b.zmtcdn.com/data/pictures/9/18660149/f0f4a9865dc39b1b4c0007be1dab65e1_o2_featured_v2.jpg?output-format=webp" />
				<BestFoodCard name="McDonald's" src="https://b.zmtcdn.com/data/pictures/chains/3/19179793/98f61bae7f08ccd13f1522c72700c536_o2_featured_v2.jpg?output-format=webp" />
				<BestFoodCard name="KFC" src="https://b.zmtcdn.com/data/pictures/chains/7/3300707/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg" />
				<BestFoodCard name="Domino's Pizza" src="https://b.zmtcdn.com/data/pictures/chains/0/3300300/6e118fe83193856b9ea9e78993344529_o2_featured_v2.jpg" />
			</div>
		</div>
		</>
	);
};

export default BestFood;
