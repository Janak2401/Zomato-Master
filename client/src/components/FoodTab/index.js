import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

import { BsHandbag } from "react-icons/bs";
import { IoFootstepsOutline } from "react-icons/io5";
import { MdNightlife,MdDining,MdDeliveryDining } from "react-icons/md";

const TabSm = () => {
	const [allTypes, setAllTypes] = useState([
		{
			id:"delivery",
			icon: <BsHandbag />,
			name: "Delivery",
			isActive: false
		},
		{
			id:"dining",
			icon: <IoFootstepsOutline />,
			name: "Dining Out",
			isActive: false
		},
		{
			id:"nightlife",
			icon: <MdNightlife />,
			name: "Nightlife",
			isActive: false
		}
	]);

	const {type} = useParams();

	return (
		<>
			<div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-around text-gray-500 border">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div className={
              type === items.id
                ? "flex flex-col relative items-center text-xl text-zomato-400 px-5 md:px-16 md:text-2xl"
                : "flex flex-col items-center text-xl px-5 md:px-16 md:text-2xl"
              }
            >
              <div className={
                type === items.id && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                }
              />
              {items.icon}
              <h5 className="text-sm">{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
		</>
	);
};

const TabLg = () => {
	const [allTypes, setAllTypes] = useState([
		{
			id:"delivery",
			icon: <MdDeliveryDining />,
			name: "Delivery",
			isActive: false
		},
		{
			id:"dining",
			icon: <MdDining />,
			name: "Dining Out",
			isActive: false
		},
		{
			id:"nightlife",
			icon: <MdNightlife />,
			name: "Nightlife",
			isActive: false
		}
	]);

	const {type} = useParams();

	return (
		<>
			<div className="hidden lg:bg-white lg:pl-28 lg:py-3 lg:absolute lg:inset-x-0 lg:top-24 lg:z-10 lg:w-full lg:flex lg:items-center lg:justify-start lg:text-gray-500 lg:border-b-2">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div className={
              type === items.id
                ? "flex relative items-center text-zomato-400 text-3xl w-48"
                : "flex items-center text-3xl w-48"
              }
            >
              <div className={
                type === items.id && "absolute -bottom-3 w-full h-2 border-b-4 border-opacity-75 border-zomato-400"
                }
              />
              {items.icon}
              <h5 className="text-xl pl-3">{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
		</>
	);
};

const FoodTab = () => {
	return (
		<>
			<div>
				<TabSm />
				<TabLg />
			</div>
		</>
	);
};

export default FoodTab;
