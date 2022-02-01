import { ethers } from "ethers";
import { useEffect, useState, useCallback } from "react";
import Web3Modal from "web3modal";
import DisplayStatus from "./status";

const providerOptions = {
  /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

const EthersWeb3Modal = () => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");

  const connect = useCallback(async () => {
    setProvider(await web3Modal.connect());
  }, []);

  const checkEthEnabled = useCallback(async () => {
    if (window.ethereum) {
      setProvider(true);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      setAddress(await signer.getAddress());
    }
  }, []);

  useEffect(() => {
    provider ? checkEthEnabled() : connect();
  }, [provider, connect, checkEthEnabled]);

  return <DisplayStatus props={{ provider, address }} />;
};

export default EthersWeb3Modal;
