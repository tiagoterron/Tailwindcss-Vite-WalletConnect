import React, {useEffect, useState} from 'react'
import { getProvider } from '../providers/Providers';
// import { Container } from 'react-bootstrap';
import axios from 'axios';
import { ethers } from "ethers";
import { CurrencyFormat, CurrencyFormatDecimals, ConnectContract, ToEthers, FromEthers, shortStr } from '../lib/';
import { images } from '../constants/';
import { Networks } from '../networks/Networks';
import { Contracts } from '../contracts/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = ({Loaded, setLoaded}) => {
    
    return (
        <section id="footer" className="relative m-0 bg-[#121117]">
        <div className="container pb-11 p-10">
            <img src={images.LOGO} className="w-[150px] lg:w-[200px] my-5" />
            <div className="flex flex-col items-center justify-center w-full space-between lg:flex-row">
            <div className="flex-grow">
                <p className="my-2 text-gray-400">Text 01</p>
                <p className="my-2 text-gray-400">Text 02</p>
            </div>
            <div className="flex flex-row items-center justify-center flex-wrap text-sm mx-auto lg:mx-5 mt-10 lg:flex-no-wrap">
                <div className="m-3"><a target="_blank" className="block min-w-[50px] text-center lg:text-3xl bg-hover p-3 hover:bg-metal transition duration-100 ease-in-out" href="#"><FontAwesomeIcon icon={faFacebook} /></a></div>
                <div className="m-3"><a target="_blank" className="block min-w-[50px] text-center lg:text-3xl bg-hover p-3 hover:bg-metal transition duration-100 ease-in-out" href="#"><FontAwesomeIcon icon={faInstagram} /></a></div>				
                <div className="m-3"><a target="_blank" className="block min-w-[50px] text-center lg:text-3xl bg-hover p-3 hover:bg-metal transition duration-100 ease-in-out" href="#"><FontAwesomeIcon icon={faTelegram} /></a></div>
                <div className="m-3"><a target="_blank" className="block min-w-[50px] text-center lg:text-3xl bg-hover p-3 hover:bg-metal transition duration-100 ease-in-out" href="#"><FontAwesomeIcon icon={faYoutube} /></a></div>				
			</div>
            </div>
            <p className="mt-20 text-gray-400 text-center">NAME 2022. All The Rights Reserved.</p>
        </div>    
        </section>
    )
}

export default Footer
