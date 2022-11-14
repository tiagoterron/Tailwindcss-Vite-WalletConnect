import React, {useEffect, useState} from 'react'
import { getProvider } from '../providers/Providers';
// import { Container } from 'react-bootstrap';
import axios from 'axios';
import { ethers } from "ethers";
import { CurrencyFormat, CurrencyFormatDecimals, ConnectContract, ToEthers, FromEthers, shortStr } from '../lib/';
import { images } from '../constants/';
import { Networks } from '../networks/Networks';
import { Contracts } from '../contracts/';

const Header = ({Loaded, setLoaded}) => {
    
    return (
        <section id="header" className="w-full relative bg-hero"> 
        <div className="container p-5 lg:pb-11">
            
        </div>    
        </section>
    )
}

export default Header
