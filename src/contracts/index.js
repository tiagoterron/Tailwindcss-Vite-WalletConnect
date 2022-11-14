import { images } from '../constants';
import ABI from './abi.json';
import ABI_SWAP from './abi_swap.json';

const NAME = "0xe05b519473ea8c70f18a40751df963c44914d418";
const ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
const FACTORY = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";

const SWAP = "0x0bf9f0c16E64E4247668eF39e89885Ba43840Ade";

const Contracts = {
    Ganache: {
        BEP20: {address: NAME, abi: ABI},
        WETH: {address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", abi: ABI},
        USDT: {address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", abi: ABI},
        USDC: {address: "0xBfeF5f660dF94F2d21417dC87A7F54dFD5845f38", abi: ABI}, //GANACHE
        WBNB: {address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52", abi: ABI},
        BUSD: {address: "0x3F2aF34E4250de94242Ac2B8A38550fd4503696d", abi: ABI}, // GANACHE
        ROUTER: {address: ROUTER, abi: ABI_SWAP},
        FACTORY: {address: FACTORY, abi: ABI_SWAP},
        SWAP: {address: SWAP, abi: ABI_SWAP}
    }
    
}

const Tokens = {
    NATIVE: {
        Symbol: "ETH",
        Title: "ETH",
        Logo: images.eth,
        Name: "ETH",
        Decimals: 18,
        
    } 
}

export { Contracts, Tokens };