import React from "react";

const TopBrands = () => {
	return (
		<>
		<div className="flex flex-col gap-2 items-start mx-8 mb-4 lg:my-8">
			<h1 className="text-xl font-semibold lg:text-3xl">Top brands for you</h1>
			<div className="flex gap-4 overflow-x-auto rounded-md pb-3 lg:gap-10">
				<img alt="image"
					src="https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png?output-format=webp"
					className="w-24 h-24 rounded-md shadow-md lg:w-36 lg:h-36"
				/>
				<img alt="image"
					src="https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807200.png?output-format=webp"
					className="w-24 h-24 rounded-md shadow-md lg:w-36 lg:h-36"
				/>
				<img alt="image"
					src="https://b.zmtcdn.com/data/brand_creatives/logos/375fbc0b02b7f5cc509ea2aeed43995a_1540461143.png?output-format=webp"
					className="w-24 h-24 rounded-md shadow-md lg:w-36 lg:h-36"
				/>
				<img alt="image"
					src="https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165333.png?output-format=webp"
					className="w-24 h-24 rounded-md shadow-md lg:w-36 lg:h-36"
				/>
				<img alt="image"
					src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433747.png?output-format=webp"
					className="w-24 h-24 rounded-md shadow-md lg:w-36 lg:h-36"
				/>
				<img alt="image"
					src="https://b.zmtcdn.com/data/brand_creatives/logos/cc2c35f94cf6591b652ac5330a3d1352_1576656123.png?output-format=webp"
					className="w-24 h-24 rounded-md shadow-md lg:w-36 lg:h-36"
				/>
			</div>
		</div>
		</>
	);
};

export default TopBrands;
