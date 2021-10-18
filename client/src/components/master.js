import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "./Delivery";
import TopBrands from "./topBrand";
import BestFood from "./BestFood/bestFood";

const Master = () => {
	const { type } = useParams();

	return (
		<>
		<div className="lg:mx-28 lg:my-10">
			<div className="m-4">
				{type==="delivery" && <Delivery /> }
			</div>
			<div className="w-full my-4">
				<img 
					src="https://b.zmtcdn.com/web/assets/e80201cf2e86a49ce4722e9b5ddfab551620045350.png?output-format=webp"
					alt="image" className="w-full" />
			</div>
			<TopBrands />
			<BestFood />
		</div>
		</>
	);
};

export default Master;
