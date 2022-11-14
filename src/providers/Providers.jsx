import React, { useEffect, useState } from 'react';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { FaClone } from 'react-icons/fa';
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Networks } from '../networks/Networks';
import { toHex, truncateAddress } from '../utils/functions.js';
import { ConnectContract, ToEthers, FromEthers, CurrencyFormat } from '../lib/';

// export const getProvider = async () => {
//   return {connected: true, signer: "signer", provider: "provider", accounts: "accounts[0]", network: "network"};
// }

const providerOptions = {
  // walletlink: {
  //   package: CoinbaseWalletSDK,
  //   options: {
  //     appName: "https://proofofmemes.com",
  //     infuraId: "e8ca118121d84863b1c8c877f07f9f4e"
  //   }
  // }
  // ,
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "e8ca118121d84863b1c8c877f07f9f4e",
      bridge: "https://terron.tk"
    }
  }
};

const web3Modal = new Web3Modal({
  cacheProvider: true,
  disableInjectedProvider: false,
  providerOptions
});

const connectProxyNetwork = (_url) => {
  const proxyNetwork = _url;
  const proxyProvider = new ethers.providers.JsonRpcProvider(proxyNetwork);
  const Provider = {
      provider: proxyProvider,
      signer: proxyProvider,
      address: "0x0"
  }
  return Provider;
}

export const getProvider = async () => {
  const connected = localStorage.getItem("userAddress");
  if(connected && connected != "0x0"){
    const conn = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(conn);
    const signer = provider.getSigner();
    const accounts = await provider.listAccounts();
    const network = await provider.getNetwork();
    return {connected: true, signer: signer, provider: provider, accounts: accounts[0], network: network};  
  }else{
    const Provider = connectProxyNetwork(Networks["10001"]["rpcUrls"]);
    
    return Provider;  
  }
  
}

export const  Providers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();
  const [balance, setBalance] = useState();
  const [nativeToken, setNativeToken] = useState();
  const [explorer, setExplorer] = useState();

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      const signer = library.getSigner();
      const balanceOf = CurrencyFormat(FromEthers(await signer.getBalance()));
      if(Networks[network["chainId"]]){
        setNetwork(Networks[network["chainId"]].chainName);
        setNativeToken(Networks[network["chainId"]].nativeCurrency.symbol);
        setExplorer(Networks[network["chainId"]].blockExplorerUrls);
      }else{
        setNetwork("Wrong network")
      }
      setBalance(balanceOf);
      setProvider(provider);
      setLibrary(library);
      localStorage.setItem("userAddress", accounts[0])
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
      
    } catch (error) {
      
      console.log(error)
      setError(error);
    }
  };

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const handleInput = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }]
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [Networks[toHex(network)]]
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const signMessage = async () => {
    if (!library) return;
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account]
      });
      setSignedMessage(message);
      setSignature(signature);
    } catch (error) {
      setError(error);
    }
  };

  const verifyMessage = async () => {
    if (!library) return;
    try {
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signedMessage, signature]
      });
      setVerified(verify === account.toLowerCase());
    } catch (error) {
      setError(error);
    }
  };

  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    localStorage.setItem("userAddress", "0x0");
    refreshState();
    handleClose();
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
        
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

    return (
      <>
      <div className="SWUIYGDWUIDEHWUHEDOWJED">
      {!account ? (
            <Button className="btn btn-bordered-white btn-smaller mx-3" onClick={connectWallet}>Connect Wallet</Button>
          ) : (
            <>
     
              {network && (
              <>
              <div className="SHuDHuIWHDEuIWE mx-3">{network}</div>
              </>
              )}
              {balance && (
              <>
              <div className="DSJUDHIUWGHDFIUWHDE mx-3">{balance} {nativeToken}</div>
              </>
              )}
              <button className="btn btn-primary mx-3" onClick={handleShow}>{truncateAddress(account)}</button>
              
         

              <Modal show={show} onHide={handleClose} animation={false} className="text-dark">
              <Modal.Header closeButton>
                <Modal.Title className="">Account:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              {account}
              <div className="SDHuDBUDWONDLKWD">
                <a href={`${explorer}/address/${account}`} target="_blank"><FaClone /> View on Explorer</a>
              </div>
              </Modal.Body>
              <Modal.Footer>
              <Button className="btn btn-bordered-white btn-smaller" onClick={disconnect}>Disconnect</Button>
              </Modal.Footer>
            </Modal>
            </>
          )}
</div>  
      </>
      )

}