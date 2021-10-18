import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const NavSm = () => {
	return (
		<>
		<div className="flex items-center justify-between w-full md:hidden">
			<div className="w-20">
				<img 
					src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
					alt="zomato logo"
					className="w-full h-full"
				/>
			</div>

			<div className="flex items-center gap-2">
				<button className="bg-zomato-400 text-white rounded-full px-2 py-1">Use App</button>
				<span className="border p-2 border-blue-200 text-blue-400 text-xl rounded-full">
					<FaPizzaSlice />
				</span>
			</div>
		</div>
		</>
	);
};

const NavMd = () => {
	return (
		<>
		<div className="items-center justify-between w-full hidden md:flex lg:hidden">
			<div className="w-24 h-5">
				<img 
					src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
					alt="zomato logo"
					className="w-full h-full"
				/>
			</div>

			<div className="py-3 px-2 flex w-2/3 items-center border border-gray-200 shadow-md rounded-lg gap-4">
				<div className="flex items-center gap-3">
					<MdLocationOn className="text-zomato-300 text-2xl"/>
					<span className="text-gray-600">Nagpur</span>
					<span className="text-gray-400 text-lg">|</span>
				</div>

				<div className="flex bg-white items-center w-full gap-4">
					<BsSearch className="text-xl text-gray-600" />
					<input type="search" placeholder="Search for restaurant, cuisine or a dish" className="w-full focus:outline-none" />
				</div>
			</div>

			<div className="flex items-center gap-2">
				<button className="bg-zomato-400 text-white rounded-full px-2 py-1">Use App</button>
				<span className="border p-2 border-blue-200 text-blue-400 text-xl rounded-full">
					<FaPizzaSlice />
				</span>
			</div>
		</div>
		</>
	);
};

const NavLg = () => {
	return (
		<>
		<div className=" mx-4 items-center justify-between w-full hidden lg:flex">
			<div className="w-40">
				<img 
					src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
					alt="zomato logo"
					className="w-full h-full"
				/>
			</div>

			<div className="py-3 px-2 flex w-2/3 items-center border border-gray-200 shadow-md rounded-lg justify-between">
				<div className="flex items-center gap-3 w-1/4 justify-evenly">
					<MdLocationOn className="text-zomato-300 text-2xl"/>
					<span className="text-gray-600 text-lg">Nagpur</span>
					<span className="text-gray-400 text-lg">|</span>
				</div>

				<div className="flex bg-white items-center w-3/4 gap-4">
					<BsSearch className="text-xl text-gray-600" />
					<input type="search" placeholder="Search for restaurant, cuisine or a dish" className="w-full focus:outline-none" />
				</div>
			</div>

			<div className="flex items-center gap-4">
				<button className="bg-zomato-400 text-white rounded-full px-2 py-1">Use App</button>
				<span className="border p-2 border-blue-200 text-blue-400 text-2xl rounded-full hover:text-white hover:bg-blue-400 cursor-pointer">
					<FaPizzaSlice />
				</span>
			</div>
		</div>
		</>
	);
};

const Navbar = () => {
	return (
		<>
			<nav className="p-4 shadow-md md:shadow-none">
				<NavSm />
				<NavMd />
				<NavLg />
			</nav>
		</>
	);
};

export default Navbar;
