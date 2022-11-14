import React, {useEffect, useState} from 'react'
import { getProvider } from '../providers/Providers';
// import { Container } from 'react-bootstrap';
import axios from 'axios';
import { ethers } from "ethers";
import { CurrencyFormat, CurrencyFormatDecimals, ConnectContract, ToEthers, FromEthers, shortStr } from '../lib/';
import { images } from '../constants/';
import { Networks } from '../networks/Networks';
import { Contracts } from '../contracts/';
import { Header, Footer, Navigator } from './';

const Home = ({Loaded, setLoaded}) => {
    useEffect(() => {
        setLoaded(true);
    }, [])
    return (
        <>
        <Navigator />
        <Header />
        <Footer />
        
    </>
    )
}

export default Home
