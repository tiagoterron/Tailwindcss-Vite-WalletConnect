import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Providers } from '../providers/Providers.jsx';
import { MainChain } from "../context/MainChain";
import { images } from '../constants';
import { useEffect } from "react";
const Navigator = () => {


const ToggleMenu = () => {
  const menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("hidden");
}

return(
<div className="sticky top-0 w-full z-50 bg-hero">
  <div className="container mx-auto flex justify-between p-5">
    <div className="flex w-full  justify-between">
      <div className="text-3xl mr-[5rem]"><Link to="/"><img src={images.LOGO} className="w-[150px] lg:w-[200px]" /></Link></div>
          <div className="hidden md:flex relative">
          <a className="px-5 py-2 block hover:text-hover font-bold transition duration-500 ease-in-out text-white" href="#">MENU 1</a>
          <a className="px-5 py-2 block  hover:text-hover font-bold transition duration-500 ease-in-out text-white" href="#">MENU 2</a>
          <a className="peer px-5 py-2 block  hover:text-hover font-bold transition duration-500 ease-in-out text-white" href="#">MENU 3</a>
          <a className="peer px-5 py-2 block  hover:text-hover font-bold transition duration-500 ease-in-out text-white" href="#">MENU 4</a>
          <a className="peer px-5 py-2 block  hover:text-hover font-bold transition duration-500 ease-in-out text-white" href="#">MENU 5</a>
    </div>
    </div>
    <div className="md:hidden flex items-center">
	<button className="outline-none mobile-menu-button mx-5" onClick={ToggleMenu}>
		<svg
			className="w-6 h-6 text-gray-500"
			x-show="!showMenu"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</button>
  
</div>

<div className="hidden mobile-menu absolute top-0 left-0 h-screen w-full z-5 bg-black flex justify-center items-center">
  <a className="absolute top-0 left-0 m-5 text-3xl" onClick={ToggleMenu}>[X]</a>
	<ul className="flex flex-col text-center">
		<li className="active"><a className="peer text-4xl px-5 py-2 block  hover:bg-blue-700 text-white" href="#"  onClick={ToggleMenu}>MENU 1</a></li>
		<li className="active"><a className="peer text-4xl px-5 py-2 block  hover:bg-blue-700 text-white" href="#"  onClick={ToggleMenu}>MENU 2</a></li>
		<li className="active"><a className="peer text-4xl px-5 py-2 block  hover:bg-blue-700 text-white" href="#"  onClick={ToggleMenu}>MENU 3</a></li>
		<li className="active"><a className="peer text-4xl px-5 py-2 block  hover:bg-blue-700 text-white" href="#"  onClick={ToggleMenu}>MENU 4</a></li>
		<li className="active"><a className="peer text-4xl px-5 py-2 block  hover:bg-blue-700 text-white" href="#"  onClick={ToggleMenu}>MENU 5</a></li>
	</ul>
</div>


    {/* <div className="hidden md:flex relative">
      <Providers />
    </div> */}
    </div>
</div>
)
}

export default Navigator;
